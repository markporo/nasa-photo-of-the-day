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
  background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(http://wallpapercave.com/wp/xTkHBfj.jpg);
  background-size:cover;
  
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content:  space-around;
  align-items: center;
  color: ${props => props.theme.colors.whiteSmoke};
  background-color: ${props => props.theme.colors.mainBG};
  ${'' /* color: ${(props) => props.besty ? props.theme.colors.dangerColor : props.theme.colors.primaryColor}; */}

  @media (max-width: 1250px) {
    flex-direction: column;
    height: 100%;

  }
 
}
`

// Styled H1 COMPONENT
const StyledH1 = styled.h1`{
  text-align: center;

  @media (screen and max-width: 1250px) {
    display: none;
  }

}`

// Styled H2 COMPONENT
const StyledH2 = styled.h2`{

  @media (only screen and min-width: 1250px) {
    display: none;
  }

}`

//StyledSection COMPONENT
const StyledSection = styled.section`{
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  margin: 0 5%;

  @media (max-width: 1250px) {
    flex-direction: column;
    margin: 4% 5% -6% 5%;
  }
}`

//Styled Description COMPONENT
const StyleDescription = styled.div`{
  display: block;
  text-align: left;
  width: 45%;
  margin: 0 5% 0 0;

  @media (max-width: 1250px) {
    width: 85%;
    margin: 2% 5%;
  }
  
}`

// styled Photo
const StyledPhoto = styled.div`{
  width: 40%;

  @media (max-width: 700px) {
    margin: 5% 5% 0% 5%;

    img {
      width: 200%;
      margin: auto 12.5%;
    }

  }

  @media (min-width: 700px) and (max-width: 1250px) {
    img {
      width: 130%;
      margin: auto 60%;
    }
  }

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

      <StyledSection>
        {/* <StyledH2>NASA PHOTO OF THE DAY</StyledH2> */}
        <StyledPhoto>
          <NasaPhoto param={NASAData} />
        </StyledPhoto>
        {/* {//date
      //description} */}
      </StyledSection>
      <StyleDescription>
        <StyledH1>
          <h1>NASA PHOTO OF THE DAY</h1>
        </StyledH1>
        <h2>{NASAData.title}</h2>
        <p>
          {NASAData.date} <span role="img" aria-label='go!'>🚀</span>!
          </p>
        <Description param={NASAData} />
      </StyleDescription>

    </StyledContainer>
  );
}

export default App;
