import React from 'react'
import profileImage from '../img/me_at_night_small.jpg'
import '../style/App.css';

function App() {
  return (
    <div className="App">
     <h1>My React App</h1>
     <h2>Made by: Ashby</h2>
     <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
