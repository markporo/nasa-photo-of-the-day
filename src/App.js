import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY } from "./constants/APIKEY"
import NasaPhoto from "./components/NasaPhoto";
import Description from "./components/Description"
import axios from 'axios';
import styled from "styled-components";
import themeObject from "./theme";

// STYLED COMPONENTS
const StyledContainer = styled.div`{
width: 80%;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.navyBlue};
  background-color: ${props => props.theme.colors.mainBG};
  ${'' /* color: ${(props) => props.besty ? props.theme.colors.dangerColor : props.theme.colors.primaryColor}; */}
}
`

//const API_KEY = process.env.REACT_APP_NASA_KEY;
function App() {
  const [NASAData, setNASAData] = useState([]);



  //SIDE EFFECTS --- Call API after App is built
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



  // RETURN to APP this html to build the page
  return (
    <StyledContainer className="App">
      <h1>NASA PHOTO OF THE DAY!</h1>
      <NasaPhoto param={NASAData} />
      {/* {//date
      //description} */}
      <h3>{NASAData.title}</h3>
      <p>
        {NASAData.date} <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Description param={NASAData} />
    </StyledContainer>
  );
}

export default App;
