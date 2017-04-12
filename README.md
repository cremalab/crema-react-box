# React Boxen
_A cross-platform layout primitive for React and React Native._

Boxen utilizes [glamor](https://github.com/threepointone/glamor) to provide cross-browser/cross-platform layout.

## Why?

- **Flex Box Plus** - Provides a helpful layer of abstraction on top of the robust (and sometimes confusing) display flex properties
- **Child spacing** - Provides consistent spacing between child elements vertically, horizontally, and wrapping

## Basic Usage
```jsx
import Box from "react-boxen"

export default function MyComponent(props) {
  return (
    <Box
      backgroundColor="whitesmoke"
      padding="20px"
      childSpacing="10px">
      <Box>Box 1</Box>
      <Box>Box 2</Box>
      <Box>Box 3</Box>      
    </Box>
  )
}
```

## API

Property               | Type   | Value _(default `*`)_                                             | Description
---                    | ---    | ---                                                               | ---        
`align`                | String | `auto *` `flex-start` `flex-end` `center` `stretch` `baseline`    | Override `childAlign` of parent `<Box/>`
`childAlign`           | String | `flex-start *` `flex-end` `center` `stretch` `baseline`           | Align children along the cross axis
`childBasis`           | String | Length                                                            | When `childWrap='wrap'` and non-percentage length, children will grow/shrink to roughly maintain this size. Think of it as _ideal length_ 😉 .
`childDirection`       | String | `column *` `column-reverse` `row` `row-reverse`                   | Vertical or horizontal orientation of children
`childJustify`         | String | `flex-start *` `flex-end` `center` `space-between` `space-around` | Align children along the main axis
`childWrap`            | String | `nowrap *` `wrap` `wrap-reverse`                                  | Define whether or not children can wrap
`childWrapLastGrow`    | String | `nowrap *` `wrap` `wrap-reverse`                                  | Define whether or not children can wrap
`childWrapCount`       | Number | `20 *`                                                            | Typical items show before wrapping. Useful for maintaining `ChildBasis` width when fewer than typical wrap count.
`childSpacing`         | String | Length                                                            | Spacing between children on any axis
`css`                  | String | Template literal containing valid CSS                             | See [styled-components documentation](https://github.com/styled-components/styled-components#passed-props)
`grow`                 | Number | `0 *`                                                             | Amount `Box` should grow to fill available space
`height`               | String | Length                                                            | ...
`padding`              | String | CSS length                                                        | ...
`shrink`               | Number | `1 *`                                                             | Amount `Box` should shrink inside available space
`width`                | String | Length                                                            | ...
`...rest`              | Any    | Any                                                               | Rest of props (aside from `children`) are spread onto `Box` itself (e.g. `onClick`, `onPress`, etc.)
