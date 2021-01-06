import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import LoginPage from "./page/LoginPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  return (
    <Router>
      <Header isLogin={isLogin} />
      <Switch>
        <Route path="/">
          {isLogin ? (
            <h1
              style={{
                paddingTop: "100vh",
                background: "white",
                display: "block",
              }}
            >
              home
            </h1>
          ) : (
            <LoginPage handleLogin={handleLogin} />
          )}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
