import React from "react"
import Box from "../.."
import { story, css, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <Box css={`
      background: orange;
      padding: 10px;
    `}>{`Some`} text here</Box>
  })
