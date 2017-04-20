const getName = require('../utils').getName

const name = getName(__dirname)

module.exports = config => {
  return {
    label: getName(__dirname),
    url: config.screen(name)
  }
}
