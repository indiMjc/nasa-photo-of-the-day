import React from "react";
import Dates from "../menu/Dates";

const PageHeader = props => {
  return (
    <div className="App-header">
      <Dates states={props.states} />
      <h3>Image for {props.date}</h3>
    </div>
  );
};

export default PageHeader;
