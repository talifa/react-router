import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./components/Post/Post";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}
