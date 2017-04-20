import React from "react"
import Box from "../.."
import { story, Parent, Child, getName } from '../utils'

story.add(getName(__dirname), () => (
    <Parent>
      <Box
        childSpacing="10px"
        childDirection="row">
        <Child align="flex-end">Child 1</Child>
        <Child>Child 2</Child>
        <Child>Child 3</Child>
        <Child basis="40%">
          <Box
            childSpacing='5px'>
            Child 4 - Width 40%
            <Child blue>Grandchildren</Child>
            <Child blue>Grandchildren</Child>
            <Child blue>Grandchildren</Child>
          </Box>
        </Child>
      </Box>
    </Parent>
))
