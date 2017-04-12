import React from "react"
import Box from "../.."
import { story, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <Box
      padding='20px'
      childSpacing='20px'
      childDirection='row'>
      <button
        type="button"
        children="Undo"
      />
      { null }
      <button
        type="button"
        children="Commit"
      />
      <button
        type="button"
      >Draw With</button>
      <button
        type="button"
      >Cancel</button>
      { null }
      { true && 'saving...' }
    </Box>
  })
