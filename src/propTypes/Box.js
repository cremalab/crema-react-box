import PropTypes from "prop-types";
const { string, number, bool, oneOf, oneOfType, arrayOf } = PropTypes;

const align = oneOf([
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "baseline",
  "auto",
]);

const stringOrNumber = oneOfType([string, number]);

export default {
  align: align,
  childAlign: align,
  childBasis: stringOrNumber,
  childDirection: oneOf([
    "column",
    "column-reverse",
    "row",
    "row-reverse"
  ]),
  childJustify: oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  childWrap: oneOf([
    "nowrap",
    "wrap",
    "wrap-reverse",
    "inherit",
    "initial",
    "unset",
  ]),
  childWrapLastGrow: bool,
  childSpacing: oneOfType([stringOrNumber, arrayOf(stringOrNumber)]),
  grow: oneOfType([string, number, bool]),
  shrink: oneOfType([string, number, bool]),
  height: stringOrNumber,
  padding: oneOfType([stringOrNumber, arrayOf(stringOrNumber)]),
  width: stringOrNumber,
};
