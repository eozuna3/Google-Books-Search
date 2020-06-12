import React, { Component } from "react";
import Nav from "./components/Nav/index.js";
import Saved from "./components/Saved/index.js";
import Search from "./components/Search/index.js";
import Jumbotron from "./components/Jumbotron/index.js";
import Books from "./pages/Books.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
     render() {
          return (
               <Router>
                    <div className="App">
                         <Nav />
                         <Jumbotron />
                         <Books />
                         <Switch>
                              <Route exact path="/" component={Search} />
                              <Route exact path="/saved" component={Saved} />
                              <Route exact path="/search" component={Search} />
                         </Switch>
                    </div>
               </Router>
          );
     }
}

export default App;

// import React from "react";
// //import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import Books from "./pages/Books";
// // import Detail from "./pages/Detail";
// // import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         {/* <Switch>
//           <Route exact path="/" component={Books} />
//           <Route exact path="/books" component={Books} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//         </Switch> */}
//       </div>
//     </Router>
//   );
// }

// export default App;