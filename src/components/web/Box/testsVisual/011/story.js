import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
  return(
    <Box
      align='flex-start'
      grow='1'
      childSpacing="20px">
      <Box
        style={css.parent}
        grow='1'
        childWrap="wrap"
        childWrapLastGrow={false}
        childGrow="1"
        childBasis="150px"
        childSpacing="10px"
        childAlign="flex-start"
        childDirection="row">
        {[...Array(1).keys()].map((x, i) => <Box key={i} style={css.child}>{`Child ${x}`}</Box>)}
      </Box>
      <Box
        style={css.parent}
        grow='1'
        childWrap="wrap"
        childWrapLastGrow={false}
        childGrow="1"
        childBasis="150px"
        childSpacing="10px"
        childAlign="flex-start"
        childDirection="row">
        {[...Array(14).keys()].map((x, i) => <Box key={i} style={css.child}>{`Child ${x}`}</Box>)}
      </Box>
    </Box>
  )
})
