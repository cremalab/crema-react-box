import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
  return(
    <div className="frameFullScreen">
      <Box
        style={css.parent}
        grow="1"
        childSpacing="10px"
        childDirection="row"
        childJustify="flex-start"
        childAlign="flex-start">
        <Box style={css.child}>Child 1</Box>
        <Box style={css.child}>Child 2</Box>
        <Box style={css.child}>Child 3</Box>
        <Box style={css.child}>Child 4</Box>
      </Box>
    </div>
  )
})
