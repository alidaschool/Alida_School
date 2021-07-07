const dotEnv = require('dotenv')

const parsedEnv = dotEnv.config().parsed

module.exports = () => {
  for (var key in parsedEnv) {
    if (typeof parsedEnv[key] === 'string') {
      parsedEnv[key] = JSON.stringify(parsedEnv)
    }
  }
  return parsedEnv
}
