import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

const Child = () =>
<Box childDirection='row' style={{backgroundColor:'white'}}>
  <Box grow='1' style={{backgroundColor: 'teal'}} padding="10px" >
    <div>Rob</div>
    <div>Rob</div>
    <div>Rob</div>
    <div>Rob</div>
    <div>Rob</div>
    <div>Rob</div>
  </Box>
  <Box grow='1' padding="10px">Other stuff aksdfj alksdfj lkasfjoijiw  aksf jaskjf iisa iasjf jkafj</Box>
</Box>

story.add(getName(__dirname), () => {
    return <Box
      padding="20px"
      align='flex-start'
      childWrap="wrap"
      childWrapLastGrow={false}
      childSpacing="10px"
      childBasis="200px"
      childAlign="flex-start"
      childDirection="row"
      style={css.parent}>
      {[...Array(10).keys()].map((x, i) =>
        <Child grow='1' key={i}/>
      )}
    </Box>
  })
