import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import LoginPage from "./page/LoginPage";
import { selectMe } from "./redux/reducer/userSlice";

function App() {
  const me = useSelector(selectMe);
  return (
    <Router>
      <Header isLogin={me ? true : false} />
      <Switch>
        <Route path="/">{me ? <h1>home</h1> : <LoginPage />}</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
