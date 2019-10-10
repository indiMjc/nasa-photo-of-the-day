import React from "react";
import Dates from "../menu/Dates";
import { CardTitle } from "reactstrap";

const PageHeader = props => {
  return (
    <div className="App-header">
      <Dates states={props.states} />
      <CardTitle>Image for {props.date}</CardTitle>
    </div>
  );
};

export default PageHeader;
