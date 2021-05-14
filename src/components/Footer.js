import '../style/Footer.css'

import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


// Lets see if I can get the flexbox too work
function Footer(props) {
    
    // I will try and do as much as the footer as I can manage.


    return (
        <>
            <div className="Footer">
                <div className="Footer-Row">
                    <div className="Footer-Col">
                        <div className="icon-container">
                            <Link to={{ pathname: "https://www.linkedin.com/in/ashby-willimott-24b383195/"}} target="_blank">
                                <div className="icon-item">
                                    <p><FontAwesomeIcon icon={['fab', 'linkedin']} color="white"/></p>
                                </div>
                            </Link>
                            <Link to={{ pathname: "https://www.youtube.com/channel/UC0l5kJqYMT1sxjNbbtj3kAA"}} target="_blank">
                                <div className="icon-item">
                                    <p><FontAwesomeIcon icon={['fab', 'youtube']} color="white"/></p>
                                </div>
                            </Link>
                            <Link to={{ pathname: "https://github.com/wallace222"}} target="_blank">
                                <div className="icon-item">
                                    <p><FontAwesomeIcon icon={['fab', 'github']} color="white"/></p>
                                </div>
                            </Link>
                            <div className="icon-item">
                                <p>{<FontAwesomeIcon icon={faEnvelope} color="white"/>}  <span className="email"> ashbyw00contact@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Footer-Col">
                        <div className="Last-Updated">
                        <h4>Last Updated On: 6/05/2021</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}



export default Footer