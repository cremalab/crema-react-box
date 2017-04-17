import React from "react"
import Box from "../.."
import { story, FullScreen, Parent, Child, getName } from '../utils'

story.add(getName(__dirname), () => (
  <FullScreen>
    <Parent>
      <Box
        grow="1"
        childFlex
        childSpacing="10px"
        childDirection="row"
        childJustify="flex-start"
        childAlign="stretch">
        <Child shrink={0} basis='150px'>Child 1</Child>
        <Child>Child 2</Child>
        <Child>Child 3</Child>
        <Child grow={2}>Child 4</Child>
      </Box>
    </Parent>
  </FullScreen>
))
