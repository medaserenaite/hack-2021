import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav'
import Awards from './pages/Awards'
import GlobalContext from "./context/GlobalContext"

function InnerApp(){
  return (
    <div className="App">
      <Nav />
      <div className="contentContainer">   
        <Route path="/home" component={Home} />
        <Route path="/awards" component={Awards} />
      </div>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <GlobalContext.Provider>
        <InnerApp />
      </GlobalContext.Provider>
    </Router>
  );
}