import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
  return(
    <div className="frameFullScreen">
      <Box
        style={css.parent}
        align='flex-start'
        grow='1'
        childWrap="wrap"
        childWrapLastGrow={false}
        childSpacing="10px"
        childBasis="150px"
        childAlign="flex-start"
        childDirection="row">
        {[...Array(14).keys()].map((x, i) =>
          <Box grow='1' basis="150px" key={i} style={css.child}>{`Child ${x}`}</Box>
        )}
      </Box>
    </div>
  )
})
