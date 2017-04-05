const storiesOf = require("@kadira/storybook").storiesOf

exports.story = storiesOf('Box', module)

exports.css = {
  parent: {
    padding: '10px',
    backgroundColor: 'orange'
  },
  child: {
    padding: '10px',
    backgroundColor: 'white'
  }
}

exports.getName = path => path.match(/([^/]*)$/)[0]
