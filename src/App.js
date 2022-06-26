import React from "react";
import {Switch, Route,BrowserRouter as Router,Redirect } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About'; 
import Testimonial from './components/Testimonial'; 
import Products from './components/Products'; 
import Blog from './components/Blog'; 
import Contact from './components/Contact'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                <Redirect to="/home" />
              )
          }}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/testimonial" exact component={Testimonial}/>         
          <Route path="/products" exact component={Products}/>         
          <Route path="/blog" exact component={Blog}/>
          <Route path="/contact" exact component={Contact}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
