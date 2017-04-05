import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
  return(
    <div className="frameFullScreen">
      <Box
        style={css.parent}
        align='flex-start'
        childWrap="wrap"
        childSpacing="10px"
        childBasis="150px"
        childGrow="1"
        childAlign="flex-start"
        childDirection="row">
        {[...Array(14).keys()].map((x, i) => <Box key={i} style={css.child}>{`Child ${x}`}</Box>)}
      </Box>
    </div>
  )
})
