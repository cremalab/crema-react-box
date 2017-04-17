import React from "react"
import Box from "../.."
import { story, Parent, Child, getName } from '../utils'

const Card = () =>

  <Box
    childDirection='row'
    childGrow={1}
    childFlex>
    <Child blue>
      <div>Rob</div>
      <div>Rob</div>
      <div>Rob</div>
      <div>Rob</div>
      <div>Rob</div>
      <div>Rob</div>
    </Child>
    <Child>Other stuff aksdfj alksdfj lkasfjoijiw  aksf jaskjf iisa iasjf jkafj</Child>
  </Box>


story.add(getName(__dirname), () => {
    return <Parent>
      <Box
        padding="20px"
        align='flex-start'
        childGrow
        childWrap="wrap"
        childWrapLastGrow={false}
        childSpacing="10px"
        childBasis="200px"
        childAlign="flex-start"
        childDirection="row">
        {[...Array(200).keys()].map((x, i) =>
          <Card grow='1' key={i}/>
        )}
      </Box>
    </Parent>
  })
