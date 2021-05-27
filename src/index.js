import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components'

// import the themeObject from theme/index
import themeObject from './theme'

ReactDOM.render(
    <ThemeProvider theme={themeObject}>
        <App />
    </ThemeProvider>
    , document.getElementById("root"));
