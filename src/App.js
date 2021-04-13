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
import PortfolioIndex from './components/pages/PortfolioIndex.js'
import PortfolioProject from './components/pages/PortfolioProject.js'
import Resume from './components/pages/About.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path = "/react-portfolio/resume" component={Resume} />
        <Route path = "/react-portfolio/form" component={Form} />
        <Route path = "/react-portfolio/portfolioIndex" component={PortfolioIndex}/>
        <Route path = "/react-portfolio/portfolio/:id" component={PortfolioProject}/>
        <Route path = "/" component={Home} /> 
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
