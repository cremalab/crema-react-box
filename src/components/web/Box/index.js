import React, { PureComponent, Children } from 'react'
import styled from 'styled-components'
import Box from 'propTypes/Box'

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
      children
    } = this.props

    return (
      <BoxContainer>
        <BoxChildren>
          { Children.map(children, child => <BoxChild>{child}</BoxChild>) }
        </BoxChildren>
      </BoxContainer>
    )

  }
}

Component.displayName = ComponentName
Component.propTypes = Box

export {
  Component as default
}
