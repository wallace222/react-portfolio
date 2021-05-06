import '../style/Footer.css'

import React from 'react'
import ReactDom from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
    return (
        <>
        {/* I need to change the icon colors. so that they */}
            <div className="Footer">
                <div className="row">
                    <div className="column">
                        <h4>Contact</h4>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                            {/* redirects to my linkedin */}
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={['fab', 'youtube']}/>
                            {/* redirects to my youtube */}
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={['fab', 'github']}/>
                            {/* redirects to my github */}
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <p>ashbyw00contact@gmail.com</p>
                        </div>
                    </div>
                    <div className="column">
                        <p> All of the content of this website has been created from scratch from Ashby Willimott. </p>
                    </div>  
                    <div className="column">
                        <h4>Last Updated On: 6/05/2021</h4>
                    </div>
                </div>
            </div>
        </>
        )
}

export default Footer