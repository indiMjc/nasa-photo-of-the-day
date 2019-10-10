import React from "react";
import axios from "axios";

//09/09/2019

const Dates = props => {
  const getNew = theDate => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=LHhD6UH1gC3c1EJyebHbf3UBgaoOZBbH3loKthxz&date=${theDate}`
      )
      .then(response => {
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
    <div className="date-input">
      Enter Date: <input id="inputValue" type="date" />
      <button
        onClick={() => getNew(document.getElementById("inputValue").value)}
      >
        Enter
      </button>
    </div>
  );
};

export default Dates;
