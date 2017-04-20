import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
    return (
      <div style={css.parent}>
        <Box childSpacing='10px'>
          <div style={css.child}>Child 1</div>
          <div style={css.child}>Child 2</div>
          <div style={css.child}>Child 3</div>
          <div style={css.child}>Child 4</div>
        </Box>
      </div>
    )
  })
