# React Boxen
A cross-platform layout primitive for React and React Native

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

### Properties

Property               | Type                 | Values                                                          | Default       | Description
---                    | ---                  | ---                                                             | ---           | ---        
`align`                | String               | `flex-start` `flex-end` `center` `stretch` `baseline` `auto`    | `auto`        | Override `childAlign` of parent `<Box />`
`backgroundAttachment` | String               | Valid CSS value                                                 | `scroll`      | ...
`backgroundColor`      | String               | Valid CSS value                                                 | *none*        | ...           
`backgroundImage`      | String               | Valid CSS value                                                 | *none*        | ...        
`backgroundPosition`   | String               | Valid CSS value                                                 | `cover`       | ...        
`backgroundRepeat`     | String               | Valid CSS value                                                 | `no-repeat`   | ...        
`borderColor`          | String               | Valid CSS value                                                 | *none*        | ...        
`borderRadius`         | String               | CSS length                                                      | *none*        | ...        
`borderStyle`          | String               | CSS length                                                      | `solid`       | ...        
`borderWidth`          | String               | CSS length                                                      | *none*        | ...        
`childAlign`           | String               | `flex-start` `flex-end` `center` `stretch` `baseline`           | `flex-start`  | Align children along the cross axis
`childDirection`       | String               | `column` `column-reverse` `row` `row-reverse`                   | `column`      | Vertical or horizontal orientation of children.
`childIdealWidth`      | String               | CSS length                                                      | `auto`        | Flex-basis
`childJustify`         | String               | `flex-start` `flex-end` `center` `space-between` `space-around` | `flex-start`  | Align children along the main axis
`childWrap`            | String               | `nowrap` `wrap` `wrap-reverse`                                  | `nowrap`      | Spacing between children
`childSpacing`         | String               | CSS length                                                      | *none*        | Spacing between children
`grow`                 | Number *or* Global   | flex-grow values                                                | `0`           | ...
`height`               | String               | CSS length                                                      | *none*        | ...
`opacity`              | Number               | `1.0`-`0.0`                                                     | *none*        | ...
`padding`              | String               | CSS length                                                      | *none*        | ...
`shrink`               | Number *or* Global   | flex-shrink values                                              | `1`           | ...
`width`                | String               | CSS length                                                      | *none*        | ...
`...rest`              | Any                  | Any                                                             | *none*        | Rest of props are spread onto `Box` itself (e.g. onClick)
