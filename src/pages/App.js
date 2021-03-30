import React from 'react'
import ReactDom from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


import profileImage from '../img/me_at_night_small.jpg'
import '../style/App.css';

const repoName = "react-portfolio"

//implement route router
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/react-portfolio/about">
          <h1>about</h1>
        </Route>
  
        <Route path = "/react-portfolio/contact-form">
          <h1> Please fill in this form Mr Ashby Willimott will be sure to get in contact with you shortly</h1>
        </Route>   
        <Route path = "/react-portfolio/portfolio">
          <h1> Here you will be able to see my portfolio</h1>
        </Route>
        <Route path = "/react-portfolio/portfolio/:id">
          <h1> It is very nice of you to take an interest on this project.</h1>
        </Route>
 { /* this will just be the default page that the user will fall back on if nothing renders */}
        <Route exact path ="/react-portfolio/">
          <h1> This is Ashby Willimott's portfolio. take your time, take it all in its a beautiful sight to behold, such a professional profile.</h1>
        </Route>
        <Route path = "/">
          <h1> On enter of this route you should be on home and not whatever you just put in the url.
          </h1>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
