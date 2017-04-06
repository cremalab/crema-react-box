import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <Box
      padding="20px"
      align='flex-start'
      childWrap="wrap"
      childWrapLastGrow={false}
      childSpacing="10px"
      childBasis="300px"
      childGrow="1"
      childAlign="flex-start"
      childDirection="row"
      style={css.parent}>
      {[...Array(80).keys()].map((x, i) =>
        <Box key={i} childDirection='row' style={{backgroundColor:'white'}}>
          <Box style={{backgroundColor: 'teal'}} padding="10px" width="150px" >
            <div>Rob</div>
            <div>Rob</div>
            <div>Rob</div>
            <div>Rob</div>
            <div>Rob</div>
            <div>Rob</div>
          </Box>
          <Box padding="10px">Other stuff aksdfj alksdfj lkasfjoijiw  aksf jaskjf iisa iasjf jkafj</Box>
        </Box>
      )}
    </Box>
  })
