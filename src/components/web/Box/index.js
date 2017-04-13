import React, { Children } from "react"
import BoxProps from "propTypes/Box"
import { propStyle } from "utils/styleHelpers"
import { css } from 'glamor'

const BoxContainer = props => css({
  display: 'flex',
  overflow: 'hidden',
  boxSizing: 'border-box',
  alignSelf: props.align,
  flexDirection: props.childDirection,
  flexGrow: props.grow,
  flexShrink: props.shrink,
  padding: props.padding,
  width: props.width,
  height: props.height,
  ...props.style
})

const BoxChildren = props => css({
  display: 'flex',
  boxSizing: 'border-box',
  flexGrow: 1,
  flexDirection: props.childDirection,
  flexWrap: props.childWrap,
  alignItems: props.childAlign,
  justifyContent: props.childJustify,
  margin: propStyle("childSpacing", { negate: true, halve: true })(props)
})

const BoxChild = (props, childProps) => {
  return css({
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'column',
    flexGrow: childProps.width
      ? 0
      : props.isCompensator
      ? 1
      : childProps.grow || props.childGrow || 0,
    flexShrink: childProps.shrink || 1,
    flexBasis: childProps.basis || props.childBasis,
    width: props.width,
    height: props.height,
    padding: `${props.isCompensator ? '0' : ''} ${propStyle('childSpacing', { halve: true })(props)}`,
  })
}

const ComponentName = "Box";
class Component extends React.Component {
  render() {
    const {
      align,
      basis,
      childAlign,
      childDirection,
      childBasis,
      childGrow,
      childJustify,
      childWrap,
      childWrapLastGrow,
      childWrapCount,
      children,
      childSpacing,
      color,
      justify,
      style,
      grow,
      padding,
      shrink,
      width,
      ...rest
    } = this.props;

    const styleProps = {
      align,
      basis,
      childAlign,
      childDirection,
      childBasis,
      childGrow,
      childJustify,
      childWrap,
      childWrapLastGrow,
      childWrapCount,
      children,
      childSpacing,
      color,
      justify,
      style,
      grow,
      padding,
      shrink,
      width,
    };

    const wrappedChildren = Children.map(children, (child, i) => {
      if(child === null) return null
      return <div
        className='BoxChild'
        {...BoxChild({
          ...styleProps,
          width: child && child.props && child.props.width,
          height: child && child.props && child.props.height,
        }, (child && child.props) || {})}
        key={i}>
          { (child && child.type)
            ? React.cloneElement(child, {
                height: child && child.props && child.props.height && 'auto',
                width: child && child.props && child.props.width && 'auto'
              })
            : child || null }
      </div>
    })

    return (
      <div className='BoxContainer' {...BoxContainer(styleProps)} {...rest}>
        { children !== null
            ? <div className='BoxChildren' {...BoxChildren(styleProps)}>
                {  wrappedChildren }
                { childWrap && !childWrapLastGrow && [...Array(childWrapCount || 20).keys()].map((child, i) =>
                  <div
                    className='BoxChild'
                    {...BoxChild({...styleProps, isCompensator: true}, (child && child.props) || {})}
                    key={i}
                  />
                ) }
              </div>
          : children }
      </div>
    );
  }
}

Component.displayName = ComponentName;
Component.propTypes = BoxProps;
Component.defaultProps = {
  childDirection: "column",
  childWrapLastGrow: true,
};

export { Component as default };
