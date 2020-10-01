module.exports = function(...args) {
  let options = require('./next.config.options.js')
  const finalConfig = {}
  const target = { target: 'serverless' }
  if (typeof options === 'function' && options.constructor.name === 'AsyncFunction') {
    // AsyncFunctions will become promises
    options = options(...args)
  }
  if (options instanceof Promise) {
    // Special case for promises, as it's currently not supported
    // and will just error later on
    return options
      .then(orignalConfig => Object.assign(finalConfig, orignalConfig))
      .then(config => Object.assign(config, target))
  } else if (typeof options === 'function') {
    Object.assign(finalConfig, options(...args))
  } else if (typeof options === 'object') {
    Object.assign(finalConfig, options)
  }
  Object.assign(finalConfig, target)
  return finalConfig
}
