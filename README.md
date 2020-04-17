# cgil-log
Goeland client side colourful log class (only 8K and no dependencies)

*NEW in version >2.0.1 you get the name of caller function for free*

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
function myNiceFunction(v) {
  log.t('Entering in my function with parameter v:', v)
  log.l('my log message inside my function ', v)
  log.w('my warning message in my function', v)
  log.e('my error message in my function', v)
}

  let myVar = 'a nice string content'
  let myObj = { key: 1, msg: 'hello world !' }
  
  log.l('my log message outside any function', myVar)
  log.w('my warning message outside any function', myObj)
  log.e('my error message outside any function', myObj)
  log.t('my trace message outside any function');
  
  myNiceFunction(myVar)

```

will give you at the console (with different colors): 
<body>
<span style="background: #b3e5fc;color: #000;">myModule:: my log message outside any function</span>
<br> a nice string content
<br>
<span style="background: #ff9800;color: #020202;">myModule:: my warning message outside any function</span>
<br> {key: 1, msg: "hello world !"}
<br>
<span style="background: #FF2325;">myModule:: my error message outside any function</span>
<br> {key: 1, msg: "hello world !"}
<br>
<span class="background: #c8e6c9;color: #37474f;">myModule:: my trace message outside any function</span>
<br><br>

<br>
<span class="background: #c8e6c9;color: #37474f;">myModule::myNiceFunction() Entering in my function with parameter v:</span>
<br> a nice string content
<br>
<span style="background: #b3e5fc;color: #000;">myModule::myNiceFunction() my log message inside my function </span>
<br> a nice string content
<br>
<span style="background: #ff9800;color: #020202;">myModule::myNiceFunction() my warning message in my function</span>
<br> a nice string content
<br>
<span style="background: #FF2325;"> myModule::myNiceFunction() my error message in my function</span>
<br> a nice string content
<br>
<br><br>

</body>

![alt text](https://raw.githubusercontent.com/lao-tseu-is-alive/cgil-log/master/examples/cgLogScreenshot.png "output example")


If you work with webpack, you can also import the ES2016 javascript source

```javascript
import cgLog from 'cgil-log/src/cgLog'
```
this way webpack will be able to do tree-shaking getting only the functions you are using, 
and your final bundle will be much smaller !

https://webpack.js.org/guides/tree-shaking/
