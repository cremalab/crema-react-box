import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <div className="frameFullScreen">
      <Box
        grow='1'
        padding="20px"
        childGrow='1'
        style={css.parent}>
        <div style={{...css.child, display: 'flex', flexGrow: 1}}>Hi</div>
      </Box>
    </div>
  })
