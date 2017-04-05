import React from "react"
import Box from "../.."
import { story, getName } from '../utils'

story.add(getName(__dirname), () => {
  return(
    <Box
      style={{
        color: "blue",
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: "blue",
        borderRadius: "10px",
        backgroundColor: "skyblue",
      }}
      padding="20px 30px">
      Box with color, borderWidth, borderColor, borderStyle default, borderRadius, backgroundColor, padding
    </Box>
  )
})
