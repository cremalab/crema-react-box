import React from "react"
import Box from "../.."
import { story, Parent, Child, getName } from '../utils'

class ChildOne extends React.PureComponent {
  render() {
    return <Box
      css={`
        background: lightblue;
      `}
      padding='10px'
      width='50px'>
      <div>Tim</div>
      <div>Rob</div>
      <div>Rob</div>
      <div>Rob</div>
      <div>Rob</div>
      <div>Rob</div>
    </Box>
  }
}

class Card extends React.PureComponent {
  render() {
    return <Box
      childDirection='row'
      childFlex>
      <ChildOne/>
      <Child grow shrink>Other stuff aksdfj alksdfj lkasfjoijiw  aksf jaskjf iisa iasjf jkafj</Child>
    </Box>
  }
}

story.add(getName(__dirname), () => {
    return <Parent>
      <Box
        padding="20px"
        align='flex-start'
        childGrow
        childShrink
        childWrap="wrap"
        childWrapLastGrow={false}
        childSpacing="10px"
        childBasis="200px"
        childAlign="flex-start"
        childDirection="row">
        {[...Array(200).keys()].map((x, i) =>
          <Card grow key={i}/>
        )}
      </Box>
    </Parent>
  })
