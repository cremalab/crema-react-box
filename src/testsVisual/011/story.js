import React from "react"
import Box from "../.."
import { story, Parent, Child, getName } from '../utils'

story.add(getName(__dirname), () => (
      <Box
        align='flex-start'
        grow='1'
        childSpacing="20px">
        <Parent>
          <Box
            grow='1'
            childWrap="wrap"
            childWrapLastGrow={false}
            childGrow="1"
            childBasis="150px"
            childSpacing="10px"
            childAlign="flex-start"
            childDirection="row">
            {[...Array(1).keys()].map((x, i) => <Child key={i}>{`Child ${x}`}</Child>)}
          </Box>
        </Parent>
        <Parent>
          <Box
            grow='1'
            childWrap="wrap"
            childWrapLastGrow={false}
            childGrow="1"
            childBasis="150px"
            childSpacing="10px"
            childAlign="flex-start"
            childDirection="row">
            {[...Array(14).keys()].map((x, i) => <Child key={i}>{`Child ${x}`}</Child>)}
          </Box>
        </Parent>
      </Box>
))
