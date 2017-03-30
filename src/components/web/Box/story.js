import React from "react";
import { storiesOf } from "@kadira/storybook";
import Box from ".";
// import { number } from '@kadira/storybook-addon-knobs'

storiesOf("Box", module)
  .add("Single Padding", () => {
    return <Box backgroundColor="orange" padding="10px" />;
  })
  .add("Single Width", () => {
    return <Box backgroundColor="orange" padding="10px" width="300px" />;
  })
  .add("Single Height", () => {
    return <Box backgroundColor="orange" padding="10px" width="300px" height="300px" />;
  })
  .add("Child Column", () => {
    return (
      <Box backgroundColor="orange" padding="10px">
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">
          Child 1
        </Box>
        <Box backgroundColor="white" padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">
          Child 3
        </Box>
        <Box backgroundColor="white" padding="10px">Child 4</Box>
      </Box>
    );
  })
  .add("Child Column Spacing", () => {
    return (
      <Box childSpacing="5px" backgroundColor="orange" padding="10px">
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">
          Child 1
        </Box>
        <Box backgroundColor="white" padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">
          Child 3
        </Box>
        <Box backgroundColor="white" padding="10px">Child 4</Box>
      </Box>
    );
  })
  .add("Child Row", () => {
    return (
      <Box
        childDirection="row"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">
          Child 1
        </Box>
        <Box backgroundColor="white" padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">
          Child 3
        </Box>
        <Box backgroundColor="white" padding="10px">Child 4</Box>
      </Box>
    );
  })
  .add("Child Row ChildJustify Flex-End", () => {
    return (
      <Box
        childJustify="flex-end"
        childDirection="row"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 1</Box>
        <Box backgroundColor="white"                   padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 3</Box>
        <Box backgroundColor="white"                   padding="10px">Child 4</Box>
      </Box>
    );
  })
  .add("Child Row ChildJustify Center", () => {
    return (
      <Box
        childJustify="center"
        childDirection="row"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 1</Box>
        <Box backgroundColor="white"                   padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 3</Box>
        <Box backgroundColor="white"                   padding="10px">Child 4</Box>
      </Box>
    );
  })
  .add("Child Row ChildGrow", () => {
    return (
      <Box
        childGrow="1"
        childDirection="row"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 1</Box>
        <Box backgroundColor="white"                   padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 3</Box>
        <Box backgroundColor="white"                   padding="10px">Child 4</Box>
      </Box>
    );
  })
  .add("Child Row ChildGrow Spacing", () => {
    return (
      <Box
        childGrow="1"
        childSpacing="5px"
        childDirection="row"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 1</Box>
        <Box backgroundColor="white"                   padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 3</Box>
        <Box backgroundColor="white"                   padding="10px">Child 4</Box>
      </Box>
    );
  })
  .add("Child Row Spacing", () => {
    return (
      <Box
        childSpacing="5px"
        childDirection="row"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">
          Child 1
        </Box>
        <Box backgroundColor="white" padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">
          Child 3
        </Box>
        <Box backgroundColor="white" padding="10px">Child 4</Box>
      </Box>
    );
  })
  .add("Child Row Spacing Grow & Width", () => {
    return (
      <Box
        childSpacing="5px"
        childDirection="row"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px" grow='1'>Child - Grow 1</Box>
        <Box backgroundColor="white"                   padding="10px">Child 2</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 3</Box>
        <Box backgroundColor="white"                   padding="10px" width="200px">Child - Width 200px</Box>
      </Box>
    );
  })
  .add("Child Row Wrap", () => {
    return (
      <Box
        childDirection="row"
        childWrap="wrap"
        childWrapLastGrow={false}
        childGrow="1"
        childBasis="50%"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 1</Box>
        <Box backgroundColor="white"                   padding="10px">Child 2</Box>
        <Box backgroundColor="white"                   padding="10px">Child 3</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 4</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 5</Box>
        <Box backgroundColor="white"                   padding="10px">Child 6</Box>
        <Box backgroundColor="white"                   padding="10px">Child 7</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 8</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 9</Box>
        <Box backgroundColor="white"                   padding="10px">Child 10</Box>
      </Box>
    );
  })
  .add("Child Row Wrap Spacing", () => {
    return (
      <Box
        childSpacing="5px"
        childDirection="row"
        childWrap="wrap"
        childGrow="1"
        childBasis="150px"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 1</Box>
        <Box backgroundColor="white"                   padding="10px">Child 2</Box>
        <Box backgroundColor="white"                   padding="10px">Child 3</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 4</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 5</Box>
        <Box backgroundColor="white"                   padding="10px">Child 6</Box>
        <Box backgroundColor="white"                   padding="10px">Child 7</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 8</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 9</Box>
        <Box backgroundColor="white"                   padding="10px">Child 10</Box>
      </Box>
    );
  })
  .add("Child Row Wrap Spacing childWrapLastGrow False", () => {
    return (
      <Box
        childSpacing="5px"
        childDirection="row"
        childWrap="wrap"
        childWrapLastGrow={false}
        childGrow="1"
        childBasis="150px"
        backgroundColor="orange"
        padding="10px"
      >
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 1</Box>
        <Box backgroundColor="white"                   padding="10px">Child 2</Box>
        <Box backgroundColor="white"                   padding="10px">Child 3</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 4</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 5</Box>
        <Box backgroundColor="white"                   padding="10px">Child 6</Box>
        <Box backgroundColor="white"                   padding="10px">Child 7</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 8</Box>
        <Box backgroundColor="hsla(0, 0%, 100%, 0.75)" padding="10px">Child 9</Box>
        <Box backgroundColor="white"                   padding="10px">Child 10</Box>
      </Box>
    );
  })
