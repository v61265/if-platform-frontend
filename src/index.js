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
    primaryLight: "#FAE0E0",
    primaryDark: "#BB8080",
    secondary: "#212121",
    secondaryLight: "#48484848",
    secondaryDark: "#212121",
    white: "#FEFEFE",
    black: "#000000",
    grey: "#C4C4C4",
    greyLight: "#E5E5E5",
    greyDark: "#656565",
    alert: "#FF0000",
    background: "#F1F0F0",
    backgroundIfLight: "#F56F6F",
    backgroundIfDark: "#F05454",
    mask: "#21212166",
  },
  font: {
    xxs: 14,
    xs: 16,
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
    xxl: 30,
    xxxl: 40,
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
