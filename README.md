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

Name                   | Type                 | Options         | Default       | Description
---                    | ---                  | ---             | ---           | ---        
`align` | String *or* [String] | `flex-start` <br> `flex-end` <br> `center` <br> `stretch` <br> `baseline` | `auto` | Override `childAlign` of parent `<Box />`
`backgroundAttachment` | String *or* [String] | Valid CSS value | `scroll`      | ...
`backgroundColor`      | String *or* [String] | Valid CSS value | *none*        | ...           
`backgroundImage`      | String *or* [String] | Valid CSS value | *none*        | ...        
`backgroundPosition`   | String *or* [String] | Valid CSS value | `cover`       | ...        
`backgroundRepeat`     | String *or* [String] | Valid CSS value | `no-repeat`   | ...        
`borderColor`          | String *or* [String] | Valid CSS value | *none*        | ...        
`borderRadius`         | String *or* [String] | CSS length      | *none*        | ...        
`borderStyle`          | String *or* [String] | CSS length      | `solid`       | ...        
`borderWidth`          | String *or* [String] | CSS length      | *none*        | ...        
`childAlign`           | String *or* [String] | <div style="white-space: nowrap">`flex-start` <br> `flex-end` <br> `center` <br> `stretch` <br> `baseline`</div> | <div style="white-space: nowrap">`flex-start`</div> | Align children along the cross axis
`childDirection`           | String *or* [String] | <div style="white-space: nowrap">`column`<br>`column-reverse`<br>`row`<br>`row-reverse`</div> | `column` | Vertical or horizontal orientation of children.
`childIdealWidth`      | String *or* [String] | CSS length | `auto` | Flex-basis
`childJustify`           | String *or* [String] | <div style="white-space: nowrap">`flex-start` <br> `flex-end` <br> `center` <br> `space-between` <br> `space-around`</div> | <div style="white-space: nowrap">`flex-start`</div>      | Align children along the main axis
`childWrap`         | String *or* [String] | <div style="white-space: nowrap">`nowrap`<br>`wrap`<br>`wrap-reverse`</div>             | `nowrap`       | Spacing between children
`childSpacing`         | String *or* [String] | CSS length     | *none*        | Spacing between children
`grow`    | Number *or* Global   | flex-grow values   | `0`      | ...
`height`  | String *or* [String] | CSS length         | *none*   | ...
`opacity` | Number               | `1.0`-`0.0`        | *none*   | ...
`padding` | String *or* [String] | CSS length         | *none*   | ...
`shrink`  | Number *or* Global   | flex-shrink values | `1`      | ...
`width`   | String *or* [String] | CSS length         | *none*   | ...
`...rest` | Any                  | Any                | *none*   | Rest of props are spread onto `<Box />` itself (e.g. onClick)
