import React from "react"
import Box from "../.."
import { story, Parent, Child, getName } from '../utils'

story.add(getName(__dirname), () => (
  <Parent>
    <Box
      childGrow
      childSpacing="10px"
      childDirection="row">
      <Child data-grow={2}>Child 1</Child>
      <Child>Child 2</Child>
      <Child>Child 3</Child>
      <Child data-grow={0}>Child 4</Child>
    </Box>
  </Parent>
))
