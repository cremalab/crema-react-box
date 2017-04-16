const getName = require('../utils').getName

const name = getName(__dirname)

module.exports = config => ({
  label: name,
  url: config.screen(name)
});
