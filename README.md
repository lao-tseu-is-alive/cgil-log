# cgil-log
goeland client side log class

## Getting Started

Install `cgil-log` in the shell

```bash
npm install cgil-log --save
```
Then to import the class  from the library just use this line in your code

```javascript
import cgLog from 'cgil-log'
const log = new cgLog('myModule')
```

and use any function as usual, webpack will usually do the work

```javascript
log.l('my log message', myVar)
log.w('my warning message', myObj)
log.e('my error message', myObj)
log.t('my trace message')
```

If you work with webpack 2, you can also import the ES2016 javascript source

```javascript
import cgLog from 'cgil-log/src/cgLog'
```
this way webpack will be able to do tree-shaking getting only the functions you are using, 
and your final bundle will be much smaller !

https://webpack.js.org/guides/tree-shaking/

https://medium.freecodecamp.org/tree-shaking-es6-modules-in-webpack-2-1add6672f31b
