import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY } from "./constants/APIKEY"
import NasaPhoto from "./components/NasaPhoto";
import Description from "./components/Description"
import axios from 'axios';

//const API_KEY = process.env.REACT_APP_NASA_KEY;

function App() {
  const [NASAData, setNASAData] = useState([]);


  useEffect(() => {
    // use Axios to fetch Nasa Data
    // on success, use setNASAData to put in state 
    // const apiUrl = 
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    axios
      .get(apiUrl)
      .then((res) => {
        setNASAData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY!</h1>
      <NasaPhoto param={NASAData} />
      {/* {//date
      //description} */}
      <h3>{NASAData.title}</h3>
      <p>
        {NASAData.date} <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Description param={NASAData} />
    </div>
  );
}

export default App;
