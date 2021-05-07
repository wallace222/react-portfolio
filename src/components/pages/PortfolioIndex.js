import { Link } from 'react-router-dom'

import React, { useState } from 'react'

import '../../style/PortfolioIndex.css'

import portfolioCollection from '../descriptions/portfoliocollection.js'

function PortfolioIndex() {

    const portfoliokeys = Object.keys(portfolioCollection)

    const portfoliokeyselements = portfoliokeys.map((key) => 
    <div>
        <Link to={"/react-portfolio/portfolio/" + key}>
        <h2>{portfolioCollection[key].title}</h2>
        </Link>
            <p>{portfolioCollection[key].story}</p>
    </div>
    )

    return (
        <>
            <div classname="Portfolio-Index">
                <h1></h1>
                    <h1>Overview of Projects</h1>
                {portfoliokeyselements}
                    <h2>Be sure to stick around to check out any of my future projects. As I am sure to be continuously updating and working on new exciting gizmos.</h2>
            </div>
        </>
    )
}

export default PortfolioIndex