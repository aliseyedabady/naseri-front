import React from "react";
import { Col } from "antd";
import PropTypes from "prop-types";

const Grid = props => {
  return <Col {...props}>{props.children}</Col>;
};

Grid.propTypes = {
  col: PropTypes.number,
  md: PropTypes.number,
  span: PropTypes.number,
};

export default Grid;
