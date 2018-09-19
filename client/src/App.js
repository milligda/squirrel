import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Welcome from "./components/pages/Welcome";
import Collection from  "./components/pages/Collection";
import PageNotFound from  "./components/pages/PageNotFound";


const App =() => (

  <Router>
    <div>
      <Header />
      <Route exact path="/" component={ Welcome } />
      <Route exact path="/collections/:id" render={ props => <Collection {...props} /> } />
      <Route exact path="/404" component= {PageNotFound} />
    </div>
  </Router>

);
  
export default App;
