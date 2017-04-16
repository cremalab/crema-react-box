import React from "react"
import Box from "../.."
import { story, FullScreen, Parent, Child, getName } from '../utils'

story.add(getName(__dirname), () => (
  <FullScreen>
    <Parent>
      <Box
        grow="1"
        childSpacing="10px"
        childDirection="row"
        childJustify="center"
        childAlign="center">
        <Child>Child 1</Child>
        <Child>Child 2</Child>
        <Child>Child 3</Child>
        <Child>Child 4</Child>
      </Box>
    </Parent>
  </FullScreen>
))
