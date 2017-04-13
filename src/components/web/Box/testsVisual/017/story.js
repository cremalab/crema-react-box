import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <div className="frameFullScreen">
      <Box
        grow='1'
        padding="20px"
        childDirection="row"
        style={css.parent}>
        <Box grow='1' style={{backgroundColor: 'teal'}}/>
        <Box grow='1' width="25%" style={{backgroundColor: 'salmon'}}/>
      </Box>
    </div>
  })
