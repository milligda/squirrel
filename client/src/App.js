import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Welcome from "./components/pages/Welcome";


const App =() => (

  <Router>
    <div>
      <Header />
      <Route exact path="/" component={ Welcome } />
    </div>
  </Router>

);
  
export default App;
