import React from "react"
import Box from "../.."
import { story, FullScreen, Child, getName } from '../utils'

story.add(getName(__dirname), () => {
    return <FullScreen>
      <Box
        css={`
          background: orange;
        `}
        padding="20px"
        childDirection="row"
        childFlex
        grow>
        <Box
          css={`
            background: LightBlue;
          `}
          padding='20px'
          grow
          childSpacing="1em"
          childAlign="stretch"
          childFlex>
          <Child>Child 1</Child>
          <Child grow>Child 2</Child>
        </Box>
        <Box
          css={`
            background: LemonChiffon;
          `}
          padding='20px'
          basis="200px"
          childSpacing="1em"
          childFlex>
          <Child>Child 1</Child>
          <Box
            childAlign="stretch"
            grow
            css={`border: 2px dashed blue`}>
            <div data-scroll data-grow data-spacerRef={el => console.log(el)}>
              {[...Array(14).keys()].map((x, i) =>
                <Child key={i}>{`Child ${x}`}</Child>
              )}
            </div>
          </Box>
          <Child>Child 3</Child>
        </Box>
      </Box>
    </FullScreen>
  })
