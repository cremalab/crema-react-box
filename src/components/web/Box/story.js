import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from '.'
// import { number } from '@kadira/storybook-addon-knobs'


storiesOf('Box', module)
  .add('Single', () => {
    return (
      <Box
        backgroundColor='orange'
        padding='10px'/>
    )
  })
  .add('Children', () => {
    return (
      <Box
        backgroundColor='orange'
        padding='10px'>
        <Box
          backgroundColor='hsla(0, 0%, 100%, 0.75)'
          padding='10px'>Child 1</Box>
        <Box
          backgroundColor='white'
          padding='10px'>Child 2</Box>
        <Box
          backgroundColor='hsla(0, 0%, 100%, 0.75)'
          padding='10px'>Child 3</Box>
        <Box
          backgroundColor='white'
          padding='10px'>Child 4</Box>
      </Box>
    )
  })
  .add('Children spaced vertical', () => {
    return (
      <Box
        childSpacing='5px'
        backgroundColor='orange'
        padding='10px'>
        <Box
          backgroundColor='hsla(0, 0%, 100%, 0.75)'
          padding='10px'>Child 1</Box>
        <Box
          backgroundColor='white'
          padding='10px'>Child 2</Box>
        <Box
          backgroundColor='hsla(0, 0%, 100%, 0.75)'
          padding='10px'>Child 3</Box>
        <Box
          backgroundColor='white'
          padding='10px'>Child 4</Box>
      </Box>
    )
  })
  .add('Children spaced horizontal', () => {
    return (
      <Box
        childSpacing='5px'
        childDirection='row'
        childJustify='stretch'
        backgroundColor='orange'
        padding='10px'>
        <Box
          backgroundColor='hsla(0, 0%, 100%, 0.75)'
          padding='10px'>Child 1</Box>
        <Box
          backgroundColor='white'
          padding='10px'>Child 2</Box>
        <Box
          backgroundColor='hsla(0, 0%, 100%, 0.75)'
          padding='10px'>Child 3</Box>
        <Box
          backgroundColor='white'
          padding='10px'>Child 4</Box>
      </Box>
    )
  })
  .add('Children spaced horizontal with grow', () => {
    return (
      <Box
        childSpacing='5px'
        childDirection='row'
        childJustify='stretch'
        backgroundColor='orange'
        padding='10px'>
        <Box
          grow='1'
          backgroundColor='hsla(0, 0%, 100%, 0.75)'
          padding='10px'>Child 1</Box>
        <Box
          backgroundColor='white'
          padding='10px'>Child 2</Box>
        <Box
          backgroundColor='hsla(0, 0%, 100%, 0.75)'
          padding='10px'>Child 3</Box>
        <Box
          backgroundColor='white'
          padding='10px'>Child 4</Box>
      </Box>
    )
  })
