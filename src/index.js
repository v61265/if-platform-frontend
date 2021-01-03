import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import * as serviceWorker from "./serviceWorker";

const theme = {
  color: {
    primary: "#F9ADAD",
    secondary: "#AAAAAA",
    secondaryLight: "#E5E5E5",
    mask: "#AAAAAA66",
    textLighter: "#CFCFCF",
    textLight: "#C4C4C4",
    textDark: "#656565",
    alert: "#B62020",
    backgroundDark: "#F4F4F4",
    background: "#F1F0F0",
    backgroundLight: "#FFFFFFE6",
    white: "#FEFEFE",
    black: "#2B2B2B",
  },
  font: {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  },
  space: {
    xxs: 4,
    xs: 8,
    sm: 10,
    md: 30,
    lg: 40,
    xl: 60,
  },
  icon: {
    sm: 24,
    md: 36,
  },
  media: {
    sm: "@media (max-width: 540px)",
  },
  shadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
