import React from "react";
import { CardImg } from "reactstrap";

const DailyImage = props => {
  return (
    <CardImg className="image" alt="NASA Ph0to Of The Day" src={props.imgSrc} />
  );
};

export default DailyImage;
