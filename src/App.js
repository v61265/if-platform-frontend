import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import EventPage from "./page/EventPage";
import HistoryEventPage from "./page/HistoryEventPage";
import UserPage from "./page/UserPage";
import { getMe, selectIsLogin } from "./redux/reducer/userSlice";
import { getAuthToken } from "./utils";
import SubmitWorkPage from "./page/SubmitWorkPage";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  // const isLogin = false;
  useEffect(() => {
    getAuthToken();
    dispatch(getMe({ goal: "getMe" }));
  }, [dispatch]);
  return (
    <Router>
      <Header isLogin={isLogin} />
      <Switch>
        <Route exact path="/">
          {isLogin ? <HomePage /> : <LoginPage />}
        </Route>
        <Route exact path="/event-page/:id">
          <EventPage />
        </Route>
        <Route exact path="/history-event-page/:id">
          <HistoryEventPage />
        </Route>
        <Route exact path="/users/:id">
          {isLogin ? <UserPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/event-page/:id/works/add">
          {isLogin ? <SubmitWorkPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/event-page/:id/works/:workid">
          {isLogin ? <SubmitWorkPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
