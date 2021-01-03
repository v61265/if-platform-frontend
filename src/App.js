import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./page/LoginPage";

function App() {
  let isLogin = false;
  return (
    <Router>
      {isLogin ? (
        <>
          <Header />
          <Switch>
            <Route path="/">
              <h1>home</h1>
            </Route>
          </Switch>
        </>
      ) : (
        <LoginPage />
      )}
    </Router>
  );
}

export default App;
