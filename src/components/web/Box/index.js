import React, { PureComponent, Children } from "react";
import styled from "styled-components";
import BoxProps from "propTypes/Box";
import { propStyle } from "utils/styleHelpers";

const BoxContainer = styled.div`
  box-sizing: border-box;
  ${propStyle("background-color", "backgroundColor")}
  ${propStyle("border-color",     "borderColor")}
  ${propStyle("border-radius",    "borderRadius")}
  ${propStyle("border-style",     "borderStyle")}
  ${propStyle("border-width",     "borderWidth")}
  ${propStyle("color",            "color")}
  ${propStyle("height",           "height")}
  ${propStyle("padding",          "padding")}
  ${propStyle("width",            "width")}
  ${props => props.styleProps.css}
`;
BoxContainer.displayName = "BoxContainer";

const BoxChildren = styled.div`
  box-sizing: border-box;
  display: flex;
  ${propStyle("flex-direction",   "childDirection")}
  ${propStyle("flex-wrap",        "childWrap")}
  ${propStyle("align-items",      "childAlign")}
  ${propStyle("justify-content",  "childJustify")}
  ${propStyle("margin",           "childSpacing", { negate: true, halve: true })}
`;
BoxChildren.displayName = "BoxChildren";

const BoxChild = styled.div`
  box-sizing: border-box;
  ${propStyle("flex-grow",   "childGrow")}
  ${propStyle("flex-grow",   "grow")}
  ${propStyle("flex-shrink", "shrink")}
  ${propStyle("flex-basis",  "childBasis")}
  ${propStyle("padding",     "childSpacing", { halve: true })}
  ${props => props.isCompensator ? `padding-top: 0; padding-bottom: 0;` : null}
`;
BoxChild.displayName = "BoxChild";

const ComponentName = "Box";
class Component extends PureComponent {
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
      childWrap,
      childWrapLastGrow,
      children,
      childSpacing,
      color,
      css,
      grow,
      height,
      opacity,
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
      childWrap,
      childWrapLastGrow,
      children,
      childSpacing,
      color,
      css,
      grow,
      height,
      opacity,
      padding,
      shrink,
      width,
    };

    return (
      <BoxContainer styleProps={styleProps} {...rest}>
        <BoxChildren styleProps={styleProps}>
          { Children.map(children, (child, i) => {
              return <BoxChild key={i} styleProps={{...styleProps, ...child.props}}>{child}</BoxChild>
            })}
          { !childWrapLastGrow &&
            children.map((x, i) => <BoxChild key={i} styleProps={styleProps} isCompensator />) }
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
};

export { Component as default };
