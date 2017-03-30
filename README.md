# React Boxen
_A cross-platform layout primitive for React and React Native._

Boxen utilizes

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
`align`                | String | `auto *` `flex-start` `flex-end` `center` `stretch` `baseline`    | Override `childAlign` of parent `<Box />`
`backgroundAttachment` | String | CSS value                                                         | ...
`backgroundColor`      | String | CSS value                                                         | ...           
`backgroundImage`      | String | CSS value                                                         | ...        
`backgroundPosition`   | String | CSS value                                                         | ...        
`backgroundRepeat`     | String | CSS value                                                         | ...        
`borderColor`          | String | CSS value                                                         | ...        
`borderRadius`         | String | CSS length                                                        | ...        
`borderStyle`          | String | CSS length                                                        | ...        
`borderWidth`          | String | CSS length                                                        | ...        
`childAlign`           | String | `flex-start *` `flex-end` `center` `stretch` `baseline`           | Align children along the cross axis
`childDirection`       | String | `column *` `column-reverse` `row` `row-reverse`                   | Vertical or horizontal orientation of children.
`childIdealWidth`      | String | CSS length                                                        | Flex-basis
`childJustify`         | String | `flex-start *` `flex-end` `center` `space-between` `space-around` | Align children along the main axis
`childWrap`            | String | `nowrap *` `wrap` `wrap-reverse`                                  | Spacing between children
`childSpacing`         | String | CSS length                                                        | Spacing between children
`grow`                 | Number | `0 *`                                                             | ...
`height`               | String | CSS length                                                        | ...
`opacity`              | Number | `1.0`-`0.0`                                                       | ...
`padding`              | String | CSS length                                                        | ...
`shrink`               | Number | `1 *`                                                             | ...
`width`                | String | CSS length                                                        | ...
`...rest`              | Any    | Any                                                               | Rest of props are spread onto `Box` itself (e.g. onClick)
