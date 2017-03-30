# React Boxen
_A cross-platform layout primitive for React and React Native._

Boxen utilizes [styled-components](https://styled-components.com) to provide cross-browser/cross-platform layout.

## Why?

- **Flex Box Plus** - Provides a helpful layer of abstraction on top of the robust (and sometimes confusing) display flex properties
- **Child spacing** - Provides consistent spacing between child elements vertically, horizontally, and wrapping
- ~~**Themeable**~~ - coming soon...

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

Property               | Type   | Value _(default `*`)_                                             | Native  | Web   | Description
---                    | ---    | ---                                                               | :-----: | :---: | ---        
`align`                | String | `auto *` `flex-start` `flex-end` `center` `stretch` `baseline`    |    ✓    |   ✓   | Override `childAlign` of parent `<Box/>`
`backgroundAttachment` | String | CSS value                                                         |    -    |   ✓   | ...
`backgroundColor`      | String | Color                                                             |    ✓    |   ✓   | ...           
`backgroundImage`      | String | Path                                                              |    ✓    |   ✓   | ...        
`backgroundPosition`   | String | CSS value                                                         |    ✓    |   ✓   | ...        
`backgroundRepeat`     | String | CSS value                                                         |    -    |   ✓   | ...        
`borderColor`          | String | Color                                                             |    ✓    |   ✓   | ...        
`borderRadius`         | String | Length                                                            |    ✓    |   ✓   | ...        
`borderStyle`          | String | Length                                                            |    ✓    |   ✓   | ...        
`borderWidth`          | String | Length                                                            |    ✓    |   ✓   | ...        
`childAlign`           | String | `flex-start *` `flex-end` `center` `stretch` `baseline`           |    ✓    |   ✓   | Align children along the cross axis
`childDirection`       | String | `column *` `column-reverse` `row` `row-reverse`                   |    ✓    |   ✓   | Vertical or horizontal orientation of children.
`childIdealWidth`      | String | Length                                                            |    ✓    |   ✓   | Flex-basis
`childJustify`         | String | `flex-start *` `flex-end` `center` `space-between` `space-around` |    ✓    |   ✓   | Align children along the main axis
`childWrap`            | String | `nowrap *` `wrap` `wrap-reverse`                                  |    ✓    |   ✓   | Spacing between children
`childSpacing`         | String | Length                                                            |    ✓    |   ✓   | Spacing between children
`grow`                 | Number | `0 *`                                                             |    ✓    |   ✓   | ...
`height`               | String | Length                                                            |    ✓    |   ✓   | ...
`opacity`              | Number | `1.0`-`0.0`                                                       |    ✓    |   ✓   | ...
`padding`              | String | CSS length                                                        |    ✓    |   ✓   | ...
`shrink`               | Number | `1 *`                                                             |    ✓    |   ✓   | ...
`width`                | String | Length                                                            |    ✓    |   ✓   | ...
`...rest`              | Any    | Any                                                               |    ✓    |   ✓   | Rest of props (aside from `children`) are spread onto `Box` itself (e.g. `onClick`, `onPress`, etc.)
