# cgil-log
Goeland client side colourful Log class (less then 3Kb and no dependencies)

* version 3 was rewritten in TypeScript and bundled with [Rollup.Js](https://rollupjs.org/guide/en/#quick-start) *

*since version >2.0.1 you get the name of caller function for free*

### Getting Started

Install `cgil-log` in your favorite shell :

```bash
npm i -P cgil-log
```
Then to import the class library just use this line in your code

```javascript
import { Log } from 'cgil-log'
const log = new Log('myModule', logLevel)
```
Based on the value of the enum logLevel [0-4] your messages will appear or not.                 

0 : none --> no log will be done, typically for a build in production
1. : error --> only errors will appear log.e('my error msg)
2. : warning --> only errors and warnings will appear 
3. : trace 
4. : info --> all logs type will appear

Just in case you wonder the levelLog enum is exported and is also available in the type definition file :  cgLog.d.ts
```typescript
export enum levelLog {
    none,   // = 0
    err,    // = 1
    warn,   // = 2
    trace,  // = 3
    info,   // = 4
}
```

### How to use in the browser

Inside the browser you need to include the minified umd version (2.6Ko only).
The library is exposed via the cgLog 'namespace'.

You can have a look in the examples directory. 

Basically it's just a classical script :
```html
<script src="../dist/cgLog.umd.js"></script>
```

Then in your javascript code 

```javascript
const log = new cgLog.Log('myModule', cgLog.levelLog.info)
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

