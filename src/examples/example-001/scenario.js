const getName = require('../utils').getName

const name = getName(__dirname)

module.exports = config => {
  console.log('URL: ' + config.screen(name))
  return ({
    label: name,
    url: config.screen(name)
  })
}
