import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PageHeader from "./components/pageHeader/PageHeader";
import DailyImage from "./components/dailyImage/DailyImage";
import ImageTitle from "./components/imageTitle/ImageTitle";
import ImgExplanation from "./components/imgExplanation/ImgExplanation";

function App() {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=LHhD6UH1gC3c1EJyebHbf3UBgaoOZBbH3loKthxz"
      )
      .then(response => {
        console.log(response);
        setDate(response.data.date);
        setImage(response.data.url);
        setTitle(response.data.title);
        setExplanation(response.data.explanation);
      })
      .catch(error => {
        console.log("Data not returned", error);
      });
  }, []);

  return (
    <div className="App">
      <PageHeader date={date} />
      <DailyImage imgSrc={image} />
      <ImageTitle title={title} />
      <ImgExplanation info={explanation} />
    </div>
  );
}

export default App;
