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
width: 100%;
height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content:  space-around;
  color: ${props => props.theme.colors.navyBlue};
  background-color: ${props => props.theme.colors.mainBG};
  ${'' /* color: ${(props) => props.besty ? props.theme.colors.dangerColor : props.theme.colors.primaryColor}; */}
}
`

// Styled H1 COMPONENT
const StyledH1 = styled.h1`{
  text-align: center;
  marging: auto 0;
}`

//StyledSection COMPONENT
const StyledSection = styled.section`{
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}`

//Styled Description COMPONENT
const StyleDescription = styled.div`{
  display: flex;
  flex-flow: column;
  text-align: left;
}`



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
      <StyledH1>
        <h1>NASA PHOTO OF THE DAY</h1>
      </StyledH1>
      <StyledSection>
        <p>this is a photo</p>
        <NasaPhoto param={NASAData} />
        {/* {//date
      //description} */}
        <StyleDescription>
          <h3>{NASAData.title}PHOTO TITLE</h3>
          <p>
            DATE{NASAData.date} <span role="img" aria-label='go!'>🚀</span>!
          </p>
          <p>description paragraph<Description param={NASAData} /></p>
        </StyleDescription>
      </StyledSection>
    </StyledContainer>
  );
}

export default App;
