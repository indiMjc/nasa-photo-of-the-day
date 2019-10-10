import React from "react";
import axios from "axios";

const datesArray = [
  "2012-03-14",
  "2012-12-23",
  "2015-06-14",
  "2017-01-01",
  "2018-07-23",
  "2018-04-15",
  "2019-01-01",
  "2019-05-22"
];

const Dates = props => {
  const getNew = theDate => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${theDate}`
      )
      .then(response => {
        console.log(response);
        props.states[0](response.data.date);
        props.states[1](response.data.url);
        props.states[2](response.data.title);
        props.states[3](response.data.explanation);
      })
      .catch(error => {
        console.log("Data not returned", error);
      });
  };
  return (
    <>
      {datesArray.map((date, i) => (
        <h5 onClick={() => getNew(date)} key={i}>
          {date}
        </h5>
      ))}
    </>
  );
};

export default Dates;
