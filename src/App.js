import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PageHeader from "./components/pageHeader/PageHeader";
import DailyImage from "./components/dailyImage/DailyImage";
import ImageTitle from "./components/imageTitle/ImageTitle";
import ImgExplanation from "./components/imgExplanation/ImgExplanation";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function App() {
  const [date, setDate] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [explanation, setExplanation] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=LHhD6UH1gC3c1EJyebHbf3UBgaoOZBbH3loKthxz"
      )
      .then(response => {
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
      <div className="card-container">
        <PageHeader
          states={[setDate, setImage, setTitle, setExplanation]}
          date={date}
        />
        <DailyImage imgSrc={image} />
        <ImageTitle title={title} />
        <ImgExplanation info={explanation} />
      </div>
    </div>
  );
}

export default App;
