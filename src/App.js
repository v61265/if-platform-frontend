import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import LoginPage from "./page/LoginPage";
import { selectIsLogin } from "./redux/reducer/userSlice";

function App() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Router>
      <Header isLogin={isLogin} />
      <Switch>
        <Route path="/">{isLogin ? <h1>123</h1> : <LoginPage />}</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
