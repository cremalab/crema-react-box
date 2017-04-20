import React from "react"
import Box from "../.."
import { story, Parent, Child, getName } from '../utils'

story.add(getName(__dirname), () => (
    <Parent>
      <Box
        childGrow={1}
        childWrap="wrap"
        childSpacing="10px"
        childAlign="flex-start"
        childDirection="row">
        {[...Array(14).keys()].map((x, i) =>
          <Child data-basis="150px" key={i}>{`Child ${x}`}</Child>
        )}
      </Box>
    </Parent>
))
