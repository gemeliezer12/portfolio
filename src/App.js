import React, {useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home/";
import Portfolio from "./components/Portfolio/";
import Contact from "./components/Contact/";
import Footer from "./components/Footer";
import Project from "./components/Project/";

import "./styles/utility.css"
import "./styles/lib.css"
import "./styles/style.css"

const App = () => {

  return (
    <Router>
      <Nav/>
      <Route exact path="/" component={(e) => (
        <Home/>
      )}/>
      <Route exact path="/portfolio" component={(e) => (
        <Portfolio/>
      )}/>
      <Route exact path="/portfolio/:project" component={(e) => (
        <Project/>
      )}/>
      <Route exact path="/contact" component={(e) => (
        <Contact/>
      )}/>
      <Footer/>
      {/* <Routes>
        <Route exact path="/" element={
          <Home/>
        }/>
        <Route exact path="/portfolio" element={
          <Portfolio/>
        }/>
        <Route exact path="/portfolio/:project" element={
          <Project/>
        }/>
        <Route exact path="/contact" element={
          <Contact/>
        }/>
      </Routes> */}
    </Router>
  )
}

export default App
