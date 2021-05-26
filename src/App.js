import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY } from "./constants/APIKEY"
import NasaPhoto from "./components/NasaPhoto";
import Home from "./components/Home";
import axios from 'axios';


function App() {
  const [NASAData, setNASAData] = useState([]);


  useEffect(() => {
    // use Axios to fetch Nasa Data
    // on success, use setNASAData to put in state 
    // const apiUrl = BASE_URL + '/friends' + '?api_key=' + API_KEY
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
      <img src={NASAData.url} alt="dope ass NASA PHOTO" />
      {/* {//date
      //description} */}
      <p>
        {NASAData.date} <span role="img" aria-label='go!'>🚀</span>!
      </p><h3>{NASAData.title}</h3>

      <p>{NASAData.explanation}</p>
    </div>
  );
}

export default App;
