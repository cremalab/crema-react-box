import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
  return(
    <div className="frameFullScreen">
      <Box
        css={css.parent}
        grow="1"
        childSpacing="10px"
        childDirection="row"
        childJustify="flex-end"
        childAlign="flex-end">
        <Box css={css.child}>Child 1</Box>
        <Box css={css.child}>Child 2</Box>
        <Box css={css.child}>Child 3</Box>
        <Box css={css.child}>Child 4</Box>
      </Box>
    </div>
  )
})
