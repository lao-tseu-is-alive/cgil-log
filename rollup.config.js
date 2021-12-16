//import resolve from 'rollup-plugin-node-resolve';
//import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';
import dts from 'rollup-plugin-dts';
import {terser} from 'rollup-plugin-terser';
/* to get more information on Rollup.js Bundler  check :
 https://rollupjs.org/guide/en/#quick-start
 https://github.com/rollup/rollup-starter-lib
 https://github.com/rollup/rollup-starter-lib/tree/typescript
 https://www.sitepoint.com/rollup-javascript-bundler-introduction/
 */

// settings
const
  dev = (process.env.NODE_ENV !== 'production'),
  sourcemap = dev ? 'inline' : false,
  bundle = config => ({
    ...config,
    input: 'src/index.ts',
    //external: ['ol'],
    external: id => !/^[./]/.test(id),
  })

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: 'cgLog',
      file: pkg.browser,
      format: 'umd',
      sourcemap:false,
    },
    plugins: [
      //resolve(),   // so Rollup can find  an external package like `ol`
      //commonjs(),  // so Rollup can convert external package in CommonJS to an ES module
      typescript(), // so Rollup can convert TypeScript to JavaScript
      terser({
        ecma: 2018,
        mangle: {toplevel: true},
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: false,
          drop_debugger: !dev
        },
        // https://terser.org/docs/api-reference#format-options
        format: {
          comments: false,
          quote_style: 1,
        }
      })
    ]
  },
  // CommonJS cjs (for Node) and ES module (for bundlers) build.
  bundle({
    plugins: [
      typescript(),
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',  //    # compile to a CommonJS module for Node.js
        sourcemap: true,
      },
      { // If your package.json file also has a module field, ES-module-aware tools
        // like Rollup and webpack 2+ will import the ES module version directly.
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: pkg.types,
      format: 'es',
    },
  }),

]
