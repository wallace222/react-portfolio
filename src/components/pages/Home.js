import React from 'react'

import '../../style/Home.css'

import cat_1 from '../../images/cat_1.jpg'
import cat_2 from '../../images/cat_2.jpg'
import cat_3 from '../../images/cat_3.jpg'
import cat_4 from '../../images/cat_4.jpg'
import cat_5 from '../../images/cat_5.jpg'

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
                            <h2>Ashby Willimott's Portfolio Showcase</h2>
                        </div>
                        <div className="Top-project-container">
                            <div className="left-top-project">
                                <div className="Text">
                                    <h1>Title #1</h1>
                                    <p></p>
                                </div>
                                <div className="Image">
                                    <img src={cat_1}/>
                                </div>
                            </div>
                            <div className="right-top-project">
                                <div className="Text">
                                    <h1>Title #2</h1>
                                    <p>Description</p>
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