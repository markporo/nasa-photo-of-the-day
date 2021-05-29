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
min-width: 1260px;
width: 100%;
height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content:  space-around;
  align-items: center;
  color: ${props => props.theme.colors.whiteSmoke};
  background-color: ${props => props.theme.colors.mainBG};
  ${'' /* color: ${(props) => props.besty ? props.theme.colors.dangerColor : props.theme.colors.primaryColor}; */}
}
`

// Styled H1 COMPONENT
const StyledH1 = styled.h1`{
  text-align: center;
}`

//StyledSection COMPONENT
const StyledSection = styled.section`{
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  margin: 0 5%;
}`

//Styled Description COMPONENT
const StyleDescription = styled.div`{
  display: block;
  text-align: left;
  width: 45%;
  
}`

// styled Photo
const StyledPhoto = styled.div`{
  width: 40%;
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
        <StyledPhoto>
          <NasaPhoto param={NASAData} />
        </StyledPhoto>
        {/* {//date
      //description} */}
        <StyleDescription>
          <StyledH1>
            <h1>NASA PHOTO OF THE DAY</h1>
          </StyledH1>
          <h3>{NASAData.title}</h3>
          <p>
            {NASAData.date} <span role="img" aria-label='go!'>🚀</span>!
          </p>
          <Description param={NASAData} />
        </StyleDescription>
      </StyledSection>
    </StyledContainer>
  );
}

export default App;
