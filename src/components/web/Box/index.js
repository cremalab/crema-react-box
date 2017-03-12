import React, { PureComponent, Children } from 'react'
import styled from 'styled-components'
import BoxProps from 'propTypes/Box'

const BoxContainer = styled.div`
  padding: ${props => props.padding}
`
BoxContainer.displayName = 'BoxContainer'

const BoxChildren = styled.div``
BoxChildren.displayName = 'BoxChildren'

const BoxChild = styled.div``
BoxChild.displayName = 'BoxChild'

const ComponentName = 'Box'
class Component extends PureComponent {
  render() {

    const {
      align,
      backgroundAttachment,
      backgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,
      childAlign,
      childDirection,
      childIdealWidth,
      childJustify,
      childWrap,
      children,
      childSpacing,
      grow,
      height,
      opacity,
      padding,
      shrink,
      width,
      ...rest
    } = this.props

    const styleProps = {
      align,
      backgroundAttachment,
      backgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,
      childAlign,
      childDirection,
      childIdealWidth,
      childJustify,
      childWrap,
      children,
      childSpacing,
      grow,
      height,
      opacity,
      padding,
      shrink,
      width,
    }

    return (
      <BoxContainer  {...styleProps} {...rest}>
        <BoxChildren {...styleProps} >
          { Children.map(children, child =>
            <BoxChild {...styleProps} {...child.props} />
          )}
        </BoxChildren>
      </BoxContainer>
    )

  }
}

Component.displayName = ComponentName
Component.propTypes   = BoxProps

export {
  Component as default
}
