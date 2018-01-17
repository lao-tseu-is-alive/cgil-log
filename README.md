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
const log = new cgLog('myModule', logLevel)
```
Based on the value of logLevel [0-4] your messages will appear or not.                 

0 : none --> no log will be done, typically for a build in production
1. : error --> only errors will appear log.e('my error msg)
2. : warning --> only errors and warnings will appear 
3. : trace 
4. : info --> all logs type will appear


and use any function as usual, webpack will usually do the work

```javascript
  const log = new cgLog('myModule', 4)
  let myVar = 'a nice string'
  let myObj = { key: 1, msg: 'hello world !' }
  
  log.l('my log message', myVar)
  log.w('my warning message', myObj)
  log.e('my error message', myObj)
  log.t('my trace message')

```

will give you at the console (with different colors): 
<body>
<span style="background: #b3e5fc;color: #000;">myModule:: my log message</span>
<br> a nice string
<br>
<span style="background: #ff9800;color: #020202;">myModule:: my warning message</span>
<br> {key: 1, msg: "hello world !"}
<br>
<span style="background: #FF2325;">myModule:: my error message</span>
<br> {key: 1, msg: "hello world !"}
<br>
<span class="background: #c8e6c9;color: #37474f;">myModule:: my trace message</span>
<br><br>
</body>


If you work with webpack 2, you can also import the ES2016 javascript source

```javascript
import cgLog from 'cgil-log/src/cgLog'
```
this way webpack will be able to do tree-shaking getting only the functions you are using, 
and your final bundle will be much smaller !

https://webpack.js.org/guides/tree-shaking/

https://medium.freecodecamp.org/tree-shaking-es6-modules-in-webpack-2-1add6672f31b
