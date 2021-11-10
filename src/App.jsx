import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Signup from "./pages/SignupPage/Signup";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
