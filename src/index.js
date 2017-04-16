import React, { Children } from "react"
import BoxProps from "propTypes/Box"
import { propStyle } from "utils/styleHelpers"
import styled from 'styled-components'

const containerMargin = p =>
  p.childSpacing
    ? propStyle('childSpacing', { negate: true, halve: true })
    : 0

const spacerGrow = p =>
  (p.cp['data-grow'] !== undefined && p.cp['data-grow'].toString())
  || (p.childGrow && 1)
  || 0

const spacerPadding = p =>
  p.childSpacing
    ? propStyle('childSpacing', { halve: true })
    : 0

const Container = styled.div`
  box-sizing:      border-box;
  display:         ${ p => p.display        || 'flex'       };
  flex-grow:       ${ p => p.grow           || 1            };
  flex-direction:  ${ p => p.childDirection || 'column'     };
  flex-wrap:       ${ p => p.childWrap      || 'nowrap'     };
  align-items:     ${ p => p.childAlign     || 'stretch'    };
  justify-content: ${ p => p.childJustify   || 'flex-start' };
  margin:          ${ containerMargin };
`

const Spacer = styled.div`
  box-sizing:      border-box;
  display:         ${ p => p.childFlex ? 'flex' : 'block' };
  flex-grow:       ${ spacerGrow };
  flex-basis:      ${ p => p.cp['data-basis'] || p.childBasis || 'auto' };
  padding:         ${ spacerPadding };
  ${ p => p.last ? 'padding-top: 0; padding-bottom: 0;' : null };
  width:           ${ p => p.cp['data-width'] || 'auto' };
  & > * {
    flex-grow:     ${ p => p.childFlex ? '1' : '0' };
  }
`

const ComponentName = "Box";
class Component extends React.Component {
  render() {
    const { props, props: { children } } = this
    return (
      <Container {...props}>
        {
          Children.map(children, Child =>
            Child
            ? <Spacer
                {...props}
                cp={{...Child.props}}
                children={Child}
              />
            : null) }
          {props.childWrapLastGrow === false
            ? [...Array(10).keys()].map((x, i) =>
                <Spacer {...props} key={i} children={null} last />
              )
            : null
        }
      </Container>
    )
  }
}

Component.displayName = ComponentName;
Component.defaultProps = {
  cp: {}
}
Component.propTypes = BoxProps;

export { Component as default };
