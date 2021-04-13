import { Link } from 'react-router-dom'

import React, { useState } from 'react'

import '../../style/PortfolioIndex.css'

import portfolioCollection from '../descriptions/portfoliocollection.js'

import Home from './Home.js'

function PortfolioIndex() {
    
    // rubber ducky this bitch

    // what is required from me here is I am required to get the keys from all of the object items. and then from those keys
    // for every key that I have I will need to create a new content for that key.
    // every item need to have its own container and inside of those containers will be the name, reposity and story

    // so right right I have my instance of a object that contains objects.
    // what I would like to do if 

    const portfoliokeys = Object.keys(portfolioCollection)

    const portfoliokeyselements = portfoliokeys.map((key) => 
    <div>
        <h1>Project</h1>

        {console.log(key)}
        {console.log(portfolioCollection)}

        {/* what I need to be able to d oright now. is I am now required to have have to use a key on a objetct to return its contents. */}

        {/* OK bitch nigga stick with ya. */}


        {/* <p>{portfolioCollection.key.title}</p> */}
    </div>
    )

    const elementTest = <h1> This is an element test that I will be using. please be valid</h1>

    return (
        <>
            <div>

                {portfoliokeyselements}


                {/*             
                1. find a way to collect all the keys for the object
                2. then I would like to be able to call all of those keys on the object and collect the title.
                3. now that I have reached that stage I would like to printg out the title WITH the repository
                4. if I have figured out a way of printing out title with repo. My next step will be to print out the description along side all the other content of the page
                5. if I can manage that then I will be very proud of myself.
                */}
                {/* What I have that I need to modify. is I need to be be able to render contents of an array in  */}
                {/* I need to render the contents of an array inside of seperate elemenst inside of react */}
            </div>
        </>
    )
}

export default PortfolioIndex