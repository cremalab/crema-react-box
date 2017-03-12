import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from '.'
// import { number } from '@kadira/storybook-addon-knobs'


storiesOf('Box', module)
  .add('base', () => {
    return (
      <Box padding='10px'>
        <Box>Child</Box>
        <Box>Child</Box>
        <Box>Child</Box>
      </Box>
    )
  })
