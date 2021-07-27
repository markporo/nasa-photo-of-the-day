import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Details from "./components/Details";
import NasaPhoto from "./components/NasaPhoto"
import { REACT_APP_NASA_KEY } from "./constants/APIKEY"

function App() {
  const [nasaData, setNASAData] = useState([]);
  // const NasaKey = process.env.REACT_APP_NASA_KEY;

  useEffect(() => {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_KEY}`
    axios
      .get(apiUrl)
      .then(res => {
        setNASAData(res.data)
        console.log(nasaData, "nasaData")
      })
      .catch(err =>
        console.log(err));
  }, [])

  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      <NasaPhoto photoURL={nasaData.url} />
      <Details details={nasaData.explanation} />
    </div>
  );
}

export default App;
