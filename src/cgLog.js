/**
 * Created by cgil on 15/12/2017.
 */
export const logLevel = {
  info: 4,
  trace: 3,
  warn: 2,
  err: 1,
  none: 0
}

const logType = {
  linfo: 'background: #b3e5fc; color: #000',
  ltrace: 'background: #c8e6c9; color: #37474f',
  lwarn: 'background: #ff9800; color: #020202',
  lerr: 'background: #FF2325; color: #BFFF1A'
}

const _isNullOrUndefined = (variable) => ((typeof (variable) === 'undefined') || (variable === null))

const _getCallerName = function (stackTrace) {
  if (!_isNullOrUndefined(stackTrace)) {
    let callerName = stackTrace.replace(/^Error\s+/, ''); // Sanitize Chrome
    callerName = callerName.split("\n")[1]; // 1st item is this, 2nd item is caller
    callerName = callerName.replace(/^\s+at Object./, ''); // Sanitize Chrome
    callerName = callerName.replace(/ \(.+\)$/, ''); // Sanitize Chrome
    callerName = callerName.replace(/\@.+/, ''); // Sanitize Firefox
    callerName = callerName.replace('at ', '').trim()
    callerName = callerName.replace('VueComponent.', '').trim()
    return callerName
  } else {
    return ''
  }
}
const _log = function (moduleName, callerName, msg, logtype, ...args) {
  let prefix = ''
  if (callerName.length > 1) {
    prefix = `${moduleName}::${callerName}()`
  } else {
    prefix = `${moduleName}::`
  }
  switch (logtype) {
    case logtype.lerr:
      console.error(`%c ${prefix} ${msg}`, logtype)
      console.trace()
      break
    case logtype.lwarn:
      console.warn(`%c ${prefix} ${msg}`, logtype)
      break
    default:
      console.log(`%c ${prefix} ${msg}`, logtype)
      break
  }
  if (args.length > 0) {
    args.map((v) => console.log(v))
  }
}
export default class cgLog {
  constructor(moduleName = '', logLevel = 4, ...args) {
    this._moduleName = moduleName
    this._logLevel = logLevel
  }

  l(msg, ...args) {
    if (this._logLevel >= logLevel.info) {
      const callerName = _getCallerName(new Error().stack); // Only tested in latest FF and Chrome
      _log(this._moduleName, callerName, msg, logType.linfo, ...args)
    }
  }

  t(msg, ...args) {
    if (this._logLevel >= logLevel.trace) {
      const callerName = _getCallerName(new Error().stack); // Only tested in latest FF and Chrome
      _log(this._moduleName, callerName, msg, logType.ltrace, ...args)
    }
  }

  w(msg, ...args) {
    if (this._logLevel >= logLevel.warn) {
      const callerName = _getCallerName(new Error().stack); // Only tested in latest FF and Chrome
      _log(this._moduleName, callerName, msg, logType.lwarn, ...args)
    }
  }

  e(msg, ...args) {
    if (this._logLevel >= logLevel.err) {
      const callerName = _getCallerName(new Error().stack); // Only tested in latest FF and Chrome
      _log(this._moduleName, callerName, msg, logType.lerr, ...args)
    }
  }
}
