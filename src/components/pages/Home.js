import React from 'react'

import { Link } from 'react-router-dom'

import '../../style/Home.css'

import salid from '../../images/salid.jfif'

import healthHubinputUI from '../../images/Health-Hub-UI-1.PNG'
import healthHubinputCode from '../../images/Health-Hub-CodeExample-1.PNG'
import healthHuboutputUI from '../../images/Health-Hub-UI-2.PNG'
import healthHuboutputCode from '../../images/Health-Hub-CodeExample-2.PNG'

function Home(props) {

    // I will start this one off by creating a grid container for top portfolio 

    return(

        <>
            <div className="Home">
                <div className="Home-container">
                    <div className="Left-side">
                        {/* try and add a background image to sides */}
                    </div>
                    <div className="Main-home-container">  
                        <div className="Title-container">
                            <h1>Ashby Willimott's Portfolio Showcase</h1>
                        </div>
                        <div className="Health-Hub-Container">
                            <div className="Project-Title">
                                    <h1>Health Hub</h1>
                            </div>
                            <div className="Quick-Summary">
                                <div className="Text">
                                    <p>
                                        Health Hub is a portable health management tool.
                                        That allows for people to manage their health.
                                        Features include the ability to set customizable goals based on user preference and individual factors.
                                        User ability to be able to view their progress made to a goal.
                                    </p>
                                    <Link to={{ pathname: "https://github.com/harakeke-2021/Health-Hub"}} target="_blank">Github Repo</Link>
                                </div>
                                <div className="Image">
                                    <img src={salid} alt="salid picture"/>
                                </div>
                            </div>
                                <div className="explanatiom">
                                <p> We are taking in the user's weight, their goal. Aswell as their metabolic type through their maintainence calories and at what pace the user would like to complete their goal at. </p>
                                <p> From this I can figure out how long it will take a user to reach their weight goal based off of the data received and display the progress towards the goal as a percentage.</p>
                            </div>
                            <div className="Showcase">
                                <div className="hhinputui">
                                        <h1> UI form </h1>
                                        <img style={{width: "300px"}} src={healthHubinputUI} alt="Health Hub UI Input form"/>
                                </div>
                                <div className="hhinputcode">
                                    <h1> Form Code</h1>
                                    <img src={healthHubinputCode} alt="Health Hub Code Input form"/>
                                </div>
                                <div className="hhoutputui">
                                    <h1>UI Output</h1>
                                    <img style={{width: "300px"}} src={healthHuboutputUI} alt="Health Hub UI Output"/>
                                </div>
                                <div className="hhoutputoutcode">
                                    <h1> Output Code</h1>
                                    <img  src={healthHuboutputCode} alt="Health Hub Code Input form"/>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="Right-side">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home