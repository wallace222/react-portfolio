import { Link } from 'react-router-dom'

import React, { useState } from 'react'

import '../../style/PortfolioIndex.css'

import portfolioCollection from '../descriptions/portfoliocollection.js'

function PortfolioIndex() {

    const portfoliokeys = Object.keys(portfolioCollection)

    const portfoliokeyselements = portfoliokeys.map((key) => 
    <div>
        <div class="title">
            <Link to={"/react-portfolio/portfolio/" + key}>
        <h2>{portfolioCollection[key].title}</h2>
        </Link>
        </div>
        <div class="details">
            <p>{portfolioCollection[key].story}</p>
        </div>
    </div>
    )

    return (
        <>

        
            {/* 1. use useState and conditionally get the state of displayed contents using buttons */}

            {/* 2. Because at the base of the app file I am using an id for extra values. I could use that*/}

            {/* Look at how other people have built their react apps and try and understand and copy/paste they work */}



            <div>
                <div class="title">
                    <h1>Overview of Projects</h1>
                </div>
                {portfoliokeyselements}
                <div class="details">
                    <h2>Be sure to stick around to check out any of my future projects. As I am sure to be continuously updating and working on new exciting gizmos.</h2>
                </div>
            </div>
        </>
    )
}

export default PortfolioIndex