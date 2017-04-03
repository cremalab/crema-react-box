const storiesOf = require("@kadira/storybook").storiesOf

exports.story = storiesOf('Box', module)

exports.css = {
  parent: `
    padding: 10px;
    background-color: orange
  `,
  child: `
    padding: 10px;
    background-color: white
  `
}

exports.getName = path => path.match(/([^/]*)$/)[0]
