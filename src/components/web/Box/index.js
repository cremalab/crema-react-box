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
  flexGrow: props.grow ? props.grow : 'inherit',
  flexShrink: props.shrink ? props.shrink : 'inherit',
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

const BoxChild = props => css({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  flexGrow: props.grow || props.childGrow || 0,
  flexShrink: props.shrink || props.childShrink || 1,
  flexBasis: props.childBasis,
  width: props.width,
  height: props.height,
  padding: `${props.isCompensator ? '0' : ''} ${propStyle('childSpacing', { halve: true })(props)}`,
})

const ComponentName = "Box";
class Component extends React.Component {
  render() {
    const {
      align,
      childAlign,
      childDirection,
      childGrow,
      childBasis,
      childJustify,
      childShrink,
      childWrap,
      childWrapLastGrow,
      childWrapCount,
      children,
      childSpacing,
      color,
      style,
      grow,
      padding,
      shrink,
      width,
      ...rest
    } = this.props;

    const styleProps = {
      align,
      childAlign,
      childDirection,
      childGrow,
      childBasis,
      childJustify,
      childShrink,
      childWrap,
      childWrapLastGrow,
      childWrapCount,
      children,
      childSpacing,
      color,
      style,
      grow,
      padding,
      shrink,
      width,
    };

    const moreThanOneChild = children && typeof children !== 'string'

    const wrappedChildren = Children.map(children, (child, i) => {
      return <div
        key={i}
        {...BoxChild({
          ...styleProps,
          grow: child.props && child.props.grow,
          shrink: child.props && child.props.shrink,
          width: child.props && child.props.width,
          height: child.props && child.props.height,
        })}>{ child.type
        ? React.cloneElement(child, {
            width: child.props.width && 'auto'
          })
        : child }
      </div>
    })

    return (
      <div {...BoxContainer(styleProps)} {...rest}>
        { moreThanOneChild && childSpacing
            ? <div {...BoxChildren(styleProps)}>
                {  wrappedChildren }
                { childWrap && !childWrapLastGrow && [...Array(childWrapCount || 20).keys()].map((child, i) =>
                  <div
                    key={i}
                    {...BoxChild({...styleProps, isCompensator: true})}
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
