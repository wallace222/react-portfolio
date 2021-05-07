import '../style/Footer.css'

import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


// Lets see if I can get the flexbox too work
function Footer(props) {
    return (
        <>
            <div className="Footer">
                <div className="Footer-Row">
                    <div className="Footer-col">
                        <p> All of the content of this website has<br/>
                            been created from scratch from Ashby Willimott.
                            </p>
                    </div>  
                    <div className="Footer-Col">
                        <h4>Contact</h4>
                            <Link to={{ pathname: "https://www.linkedin.com/in/ashby-willimott-24b383195/"}} target="_blank">
                        <div className="icon-container">
                            <p><FontAwesomeIcon icon={['fab', 'linkedin']} color="white"/></p>
                        </div>
                            </Link>
                            <Link to={{ pathname: "https://www.youtube.com/channel/UC0l5kJqYMT1sxjNbbtj3kAA"}} target="_blank">
                        <div className="icon-container">
                            <p><FontAwesomeIcon icon={['fab', 'youtube']} color="white"/></p>
                        </div>
                            </Link>
                            <Link to={{ pathname: "https://github.com/wallace222"}} target="_blank">
                        <div className="icon-container">
                            <p><FontAwesomeIcon icon={['fab', 'github']} color="white"/></p>
                        </div>
                            </Link>
                        <div className="icon-border">
                            <div className="icon-container">
                                <p>{<FontAwesomeIcon icon={faEnvelope} color="white"/>}<br/> <span className="fine-print"> ashbyw00contact@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Footer-col">
                        <h4>Last Updated On: 6/05/2021</h4>
                    </div>
                </div>
            </div>
        </>
        )
}



export default Footer