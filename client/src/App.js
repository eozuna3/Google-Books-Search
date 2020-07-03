import React, { Component } from "react";
import Nav from "./components/Nav/index.js";
import Saved from "./pages/Saved.js";
import Search from "./pages/Search.js";
import Jumbotron from "./components/Jumbotron/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NoPage from "./pages/NoPage.js";

class App extends Component {
     render() {
          return (
               <Router>
                    <div className="App">
                         <Nav />
                         <Jumbotron />
                         <Switch>
                              <Route exact path="/" component={Search} />
                              <Route exact path="/saved" component={Saved} />
                              <Route exact path="/search" component={Search} />
                              <Route component={NoPage} />
                         </Switch>
                    </div>
               </Router>
          );
     }
}

export default App;