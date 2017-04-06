import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <Box
      style={css.parent}
      childSpacing="10px"
      childDirection="row">
      <Box style={css.child}>Child 1</Box>
      <Box style={css.child}>Child 2</Box>
      <Box style={css.child}>Child 3</Box>
      <Box style={css.child} width="40%" childSpacing='5px'>
        Child 4 - Width 40%
        <div style={{backgroundColor: 'skyblue' }}>Grandchildren</div>
        <div style={{backgroundColor: 'skyblue' }}>Grandchildren</div>
        <div style={{backgroundColor: 'skyblue' }}>Grandchildren</div>
      </Box>
    </Box>;
  })
