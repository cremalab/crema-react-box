import React from "react"
import Box from "../.."
import { story, FullScreen, Parent, Child, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <FullScreen>
      <Parent>
        <Box
          grow='1'
          childWrap='wrap'
          childDirection="row"
          childJustify="flex-start"
          childFlex>
          <Child data-grow={1} blue>Child 1</Child>
          <Child data-width="35%">Child 2</Child>
        </Box>
      </Parent>
    </FullScreen>
  })
