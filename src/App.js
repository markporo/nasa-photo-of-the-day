import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Details from "./components/Details";
import NasaPhoto from "./components/NasaPhoto"
import { REACT_APP_NASA_KEY } from "./constants/APIKEY"
import styled from "styled-components";


const StyledDiv = styled.div`
color: ${props => props.theme.PrimaryColor};
background-color: ${props => props.theme.bgColor};
width: 100%;
padding: 3% 2%;
`
const StyledH1 = styled.h1`
padding-top: 5%;
`


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
    <StyledDiv className="App">
      <StyledH1>NASA PHOTO OF THE DAY</StyledH1>
      <NasaPhoto photoURL={nasaData.url} />
      <Details details={nasaData.explanation} />
    </StyledDiv>
  );
}

export default App;
