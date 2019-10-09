import React from "react";

const DropDown = props => {
  console.log(props);
  return <div className={props.visibility} id="drop-down"></div>;
};

export default DropDown;
