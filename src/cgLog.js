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
const _log = function (msg, logtype, ...args) {
  console.log(`%c ${msg}`, logtype)
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
      _log(`${this._moduleName}:: ${msg}`, logType.linfo, ...args)
    }
  }
  t(msg, ...args) {
    if (this._logLevel >= logLevel.trace) {
      _log(`${this._moduleName}:: ${msg}`, logType.ltrace, ...args)
    }
  }
  w(msg, ...args) {
    if (this._logLevel >= logLevel.warn) {
      _log(`${this._moduleName}:: ${msg}`, logType.lwarn, ...args)
    }
  }
  e(msg, ...args) {
    if (this._logLevel >= logLevel.err) {
      _log(`${this._moduleName}:: ${msg}`, logType.lerr, ...args)
    }
  }
}
