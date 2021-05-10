import React from 'react'

import { Link } from 'react-router-dom'

import '../../style/Home.css'

import salid from '../../images/salid.jfif'

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
                        <div className="Top-project-container">
                            <div className="left-top-project">
                                <div className="Text">
                                    <h1>Health Hub</h1>
                                    <p> Health Hub is a portable health management tool.
                                        That allows for people to manage their health.
                                        Features include the ability to set customizable goals based on user preference and individual factors.
                                        User ability to be able to view their progress made to a goal.
                                    </p>
                                    <Link to={{ pathname: "https://github.com/harakeke-2021/Health-Hub"}} target="_blank">Github Repo</Link>
                                </div>
                                <div className="Image">
                                    <img src={salid}/>
                                </div>
                            </div>
                            <div className="right-top-project">
                                <div className="Text">
                                    <h1>Place Holder Title</h1>
                                    <p> Place Holder Description</p>
                                </div>
                                <div className="Image">

                                </div>
                            </div>
                        </div>
                        <div className="Bottom-project-container">

                            <div className="Text">

                            </div>
                            <div className="Image">
                                <img className=""/>
                                {/* make me red */}
                            </div>
                        
                        </div>
                    </div>
                    <div className="Right-side">
                        {/* try and add a background image to sides */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home