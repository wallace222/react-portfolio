import React from 'react'

import {
  Switch,
  Route
} from "react-router-dom"

import './style/App.css';

import Header from './components/Header.js'
import Footer from './components/Footer.js'

import Home from './components/pages/Home.js'
import About from './components/pages/About.js'//the export of this component is working as I have expected. Do further research into the matter.
import Form from './components/pages/Form.js'
import PortfolioShowCase1 from './components/pages/PortfolioShowCase1.js'
import PortfolioShowCase2 from './components/pages/PortfolioShowCase2.js'
import PortfolioShowCase3 from './components/pages/PortfolioShowCase3.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path = "/react-portfolio/about" component={About}/>
        <Route path = "/react-portfolio/contactForm" component={Form}/>
        <Route path = "/react-portfolio/portfolio/1" component={PortfolioShowCase1}/>
        <Route path = "/react-portfolio/portfolio/2" component={PortfolioShowCase2}/>
        <Route path = "/react-portfolio/portfolio/3" component={PortfolioShowCase3}/>

        <Route exact path ="/react-portfolio" component={Home}/>
        <Route path = "/" component={Header}/>
          {/* <h1>please enter a valid path next time</h1>
          </Route> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
