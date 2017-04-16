import React from "react"
import Box from "../.."
import { story, Parent, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <Parent>
      <Box
        childSpacing='10px'
        childDirection='row'
        childAlign='center'>
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
          children='Draw with me'/>
        <button
          type="button"
          children='Cancel'/>
        { null }
        { true && 'saving...' }
      </Box>
    </Parent>
  })
