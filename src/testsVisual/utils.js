const storiesOf = require("@kadira/storybook").storiesOf
const styled = require("styled-components").default

exports.story = storiesOf('Box', module)

exports.FullScreen = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
`
exports.Parent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  padding: 10px;
  background: orange;
`
exports.Child = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  padding: 10px;
  background: ${ p => p.blue ? 'skyblue' : 'white' };
`

exports.css = {
  parent: {
    padding: '10px',
    backgroundColor: 'orange',
    flexGrow: 1
  },
  child: {
    padding: '10px',
    backgroundColor: 'white'
  }
}

exports.getName = path => path.match(/([^/]*)$/)[0]
