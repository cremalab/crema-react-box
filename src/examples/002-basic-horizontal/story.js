import React from "react"
import Box from "../.."
import { story, getName } from '../utils'

const css = {
  parent: `
    padding: 1em;
    background: lightgray;
  `,
  child: `
    padding: 0.75em;
    background: white;
  `
}

story.add(getName(__dirname), () => {
    return <Box
      css={css.parent}
      childDirection="row"
      childSpacing="10px">
      <Box css={css.child}>Child 1</Box>
      <Box css={css.child}>Child 2</Box>
      <Box css={css.child}>Child 3</Box>
    </Box>
  })
