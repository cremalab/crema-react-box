import React from "react"
import Box from "../.."
import { story, getName, Child } from '../utils'
import { action } from '@kadira/storybook'

story.add(getName(__dirname), () => {
    return <Box
      padding="10px"
      background="orange"
      onClick={action("click")}>
      <Child>Child 1</Child>
      <Child>Child 2</Child>
      <Child>Child 3</Child>
      <Child>Child 4</Child>
    </Box>
  })
