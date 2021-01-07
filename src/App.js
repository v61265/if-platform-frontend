import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import EventPage from "./page/EventPage";
import HistoryEventPage from "./page/HistoryEventPage";
import { selectIsLogin } from "./redux/reducer/userSlice";

function App() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Router>
      <Header isLogin={isLogin} />
      <Switch>
        <Route exact path="/">
          {isLogin ? <HomePage /> : <LoginPage />}
        </Route>
        <Route exact path="/event-page">
          <EventPage />
        </Route>
        <Route exact path="/history-event-page">
          <HistoryEventPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
