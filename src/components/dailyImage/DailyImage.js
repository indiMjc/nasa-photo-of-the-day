import React from "react";

const DailyImage = props => {
  return (
    <img className="image" alt="NASA Ph0to Of The Day" src={props.imgSrc} />
  );
};

export default DailyImage;
