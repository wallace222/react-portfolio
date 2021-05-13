import React from 'react'

import '../../style/Resume.css'

import { Document, Page } from 'react-pdf'
import { useState } from 'react/cjs/react.development'
// view is never exported what now.



function Resume(props) {
    return (
        <>
            <div className="Resume">
                <div className="Resume-container">
                    <div className="Left-side"></div>
                    <div className="Main-Resume-container">
                        <div className="A4">
                            <div className="Name-Contact">
                                <h1>Ashby Willimott</h1>
                                <h3>Software Developer</h3>
                                <p><span className="bold">Location:</span> Auckland, New Zealand</p>
                                <p><span className="bold">Linkedin:</span>  https://www.linkedin.com/in/ashby-willimott-24b383195/ (Preferred contact)</p>
                                <p><span className="bold">Github:</span> https://github.com/wallace222</p>
                                <p><span className="bold">Mobile:</span> (022) 649 3569</p>
                                <p><span className="bold">Email:</span> ashbyw00business@gmail.com</p>
                            </div>

                            {/* Change the About section to skills */}
                            <div className="Skill-section">
                                {/* change this too  */}
                                <h2>Skills And Qualities</h2>
                                <p>
                                    Very passionate software developer. With strong experience in Full stack web development.
                                    I am competent with SQLite(Sql database), React, Javascript, Node.js, Redux.  
                                    Qualities - I am a great team player. I am a precise, efficient and easy person to communicate with.
                                </p>
                            </div>
                            <div className="Experience">
                                <h2>Experience</h2>
                                <h3>Enspiral Dev Academy, Auckland New Zealand - Full Stack Developer</h3>
                                <h4>November 2020 - March 2021</h4>
                                <p>
                                    Full stack web development program. A fast paced collaborative environment with hands on experience on full stack web development.<br/>
                                    Hard Skills - SQL Databases,Javascript,  Node.js, , React, Redux <br/>
                                    Soft Skills - Test Driven Development, Agile Development Practices, Effective Communication in teams. Awareness of company culture. <br/>
                                </p>
                                <h3>Korbond, Auckland New Zealand - Warehouse Storeman</h3>
                                <h4>December 2018 - November  2020</h4>
                                <p>
                                    Warehouse responsible for sending products to supermarkets.<br/>
                                    Responsibilities - Handling Imports, Packing Orders, Stock Management, Working with a flexible schedule. <br/>
                                </p>
                            </div>
                            <div className="Education-Certificate">
                                <h2>
                                    Education And Certificates
                                </h2>
                                <h3>
                                    Google IT Support Specialization
                                </h3>
                                <h4>
                                    October 2020
                                </h4>
                                <p>
                                    Leant Skills - Customer service(handling customers appropriately), Remote/on-site network troubleshooting, Hardware troubleshooting, Virtual Environments.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Right-side"></div>
                </div>
            </div>
        </>
    )
}

export default Resume