import React from "react";
import Menu from "../menu/Menu";

const PageHeader = props => {
  return (
    <div className="App-header">
      <Menu />
      <h3>Image for {props.date}</h3>
    </div>
  );
};

export default PageHeader;
