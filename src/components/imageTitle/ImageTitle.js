import React from "react";
import { CardTitle } from "reactstrap";

const ImageTitle = props => {
  return <CardTitle className="text-primary">{props.title}</CardTitle>;
};

export default ImageTitle;
