import { PropTypes } from 'react'
const { string, number, oneOf, oneOfType, arrayOf } = PropTypes

const align = oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline', 'auto'])
const stringOrNumber = oneOfType([string, number])

export default {
  align: align,
  backgroundAttachment: oneOf(['scroll', 'fixed', 'local', 'inherit']),
  backgroundColor: string,
  backgroundImage: string,
  backgroundPosition: string,
  backgroundRepeat: string,
  borderColor: oneOfType([stringOrNumber, arrayOf(stringOrNumber)]),
  borderRadius: oneOfType([stringOrNumber, arrayOf(stringOrNumber)]),
  borderStyle: oneOfType([stringOrNumber, arrayOf(stringOrNumber)]),
  borderWidth: oneOfType([stringOrNumber, arrayOf(stringOrNumber)]),
  childAlign: align,
  childDirection: oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  childIdealWidth: string,
  childJustify: oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  childWrap: oneOf(['nowrap', 'wrap', 'wrap-reverse', 'inherit', 'initial', 'unset']),
  childSpacing: oneOfType([stringOrNumber, arrayOf(stringOrNumber)]),
  grow: number,
  height: string,
  opacity: number,
  padding: oneOfType([stringOrNumber, arrayOf(stringOrNumber)]),
  shrink: number,
  width: string,
}
