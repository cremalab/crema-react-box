import React from "react"
import Box from "../.."
import { story, FullScreen, Parent, Child, getName } from '../utils'

story.add(getName(__dirname), () => (
  <FullScreen>
    <Parent>
      <Box
        grow="1"
        childFlex
        childGrow={1}
        childSpacing="10px"
        childDirection="row"
        childJustify="flex-start"
        childAlign="stretch">
        <Child>Child 1</Child>
        <Child>Child 2</Child>
        <Child>Child 3</Child>
        <Child>Child 4</Child>
      </Box>
    </Parent>
  </FullScreen>
))
