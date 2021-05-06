import React from 'react'
import ReactDom from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
    return (
        <>
            <div className="row">
                <div className="column">
                    <h4>Contact</h4>
                    <p>Linkedin</p>
                    {/* use FontAwesomeIcon to add all your socials */}
                        <FontAwesomeIcon icon={faCoffee} />
                    <p>Email</p>
                    <img/>
                    <p>Youtube</p>
                    <img/>
                    <p>Github</p>
                    <img/>
                </div>
                <div className="column">
                    <p> All of the content of this website has been created from scratch from Ashby Willimott. </p>
                </div>  
                <div className="column">
                    <h4>Last Updated On: 6/05/2021</h4>
                </div>
            </div>
        </>
        )
}

export default Footer