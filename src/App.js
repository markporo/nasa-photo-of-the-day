import React, { useState, useEffect } from "react";
import "./App.css";
import API_KEY from "./constants/APIKEY"
import axios from 'axios';


function App() {
  const [NASAData, setNASAData] = useState([]);


  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY!</h1>
      <img src="" alt="Sweet NASA Photo">
      {/* {//date
      //description} */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
