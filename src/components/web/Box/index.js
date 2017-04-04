import React, { Children } from "react";
import styled from "styled-components";
import BoxProps from "propTypes/Box";
import { propStyle } from "utils/styleHelpers";

const BoxContainer = styled.div`
  flex-grow: inherit;
  flex-shrink: inherit;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  ${propStyle("flex-grow",        "grow")}
  ${propStyle("flex-shrink",      "shrink")}
  ${propStyle("background-color", "backgroundColor")}
  ${propStyle("border-color",     "borderColor")}
  ${propStyle("border-radius",    "borderRadius")}
  ${propStyle("border-style",     "borderStyle")}
  ${propStyle("border-width",     "borderWidth")}
  ${propStyle("color",            "color")}
  ${propStyle("height",           "height")}
  ${propStyle("padding",          "padding")}
  ${propStyle("width",            "width")}
  ${propStyle("align-self",       "align")}
  ${props => props.styleProps.css}
`;
BoxContainer.displayName = "BoxContainer";

const BoxChildren = styled.div`
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  ${propStyle("flex-direction",   "childDirection")}
  ${propStyle("flex-wrap",        "childWrap")}
  ${propStyle("align-items",      "childAlign")}
  ${propStyle("justify-content",  "childJustify")}
  ${propStyle("margin",           "childSpacing", { negate: true, halve: true })}
`;
BoxChildren.displayName = "BoxChildren";

const BoxChild = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  ${propStyle("flex-grow",   "childGrow")}
  ${propStyle("flex-grow",   "grow")}
  ${propStyle("flex-shrink", "childShrink")}
  ${propStyle("flex-shrink", "shrink")}
  ${propStyle("flex-basis",  "childBasis")}
  ${propStyle("padding",     "childSpacing", { halve: true })}
  ${propStyle("width",       "width")}
  ${props => props.isCompensator ? `padding-top: 0; padding-bottom: 0;` : null}
`;
BoxChild.displayName = "BoxChild";

const ComponentName = "Box";
class Component extends React.Component {
  render() {
    const {
      align,
      backgroundColor,
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,
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
      css,
      grow,
      padding,
      shrink,
      width,
      ...rest
    } = this.props;

    const styleProps = {
      align,
      backgroundColor,
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,
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
      css,
      grow,
      padding,
      shrink,
      width,
    };

    return (
      <BoxContainer styleProps={styleProps} {...rest}>
        <BoxChildren styleProps={styleProps}>
          { Children.map(children, (child, i) => {
            return <BoxChild
              key={i}
              styleProps={{
                ...styleProps,
                grow: child.props && child.props.grow,
                shrink: child.props && child.props.shrink,
                width: child.props && child.props.width,
                height: child.props && child.props.height,
              }}>{ child.type
              ? React.cloneElement(child, {
                  width: child.props.width && 0
                })
              : child }
            </BoxChild>
          }) }
          { childWrap && !childWrapLastGrow && [...Array(childWrapCount || 20).keys()].map((child, i) =>
            <BoxChild
              key={i}
              styleProps={styleProps}
              isCompensator
            />
          ) }
        </BoxChildren>
      </BoxContainer>
    );
  }
}

Component.displayName = ComponentName;
Component.propTypes = BoxProps;
Component.defaultProps = {
  childDirection: "column",
  childWrapLastGrow: true,
  borderStyle: "solid",
  borderWidth: "0",
};

export { Component as default };
