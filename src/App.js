import React from 'react'

import {
  Switch,
  Route
} from "react-router-dom"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './style/App.css';

import Header from './components/Header.js'
import Footer from './components/Footer.js'

import Home from './components/pages/Home.js'
import PortfolioIndex from './components/pages/PortfolioIndex.js'
import PortfolioProject from './components/pages/PortfolioProject.js'
import Resume from './components/pages/Resume.js';

library.add(fab)

function App() {


  // I want the images of the sidebar to be stored inside of the app and passed into the components as props.

  // I can refactor the code later. for now what I will do is. I will just get it working in the bar 
  
  return (
    <div className="App">
      <Header/>
            <Switch>
              <Route path = "/react-portfolio/resume" component={Resume} />
              <Route path = "/react-portfolio/portfolio" component={PortfolioIndex}/>
              <Route path = "/react-portfolio/portfolio/:id" component={PortfolioProject}/>
              <Route path = "/" component={Home} /> 
            </Switch>
      <Footer/>
    </div>
  );
}

export default App;
