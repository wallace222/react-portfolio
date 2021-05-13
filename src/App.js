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
import Resume from './components/pages/Resume.js';

library.add(fab)

function App() {
  return (
    <div className="App">
      <Header/>
            <Switch>
              <Route path = "/react-portfolio/resume" component={Resume} />
              <Route path = "/" component={Home} /> 
            </Switch>
      <Footer/>
    </div>
  );
}

export default App;
