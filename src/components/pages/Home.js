import React from 'react'

import '../../style/Home.css'


function Home(props) {

    // For now what I should do is just focus on building onto the css of the home page.


    // With css what I think I will do for home is I will add a top margin for my home page

    // I will add a top border and a bottom border for my main heading
    
    // I will add a top border for all of my sub headings
    
    // I will make it short and sweat.

    return(
        <>
            <div className="Home">
                <div className="First-section">
                    <div className="main-heading-container">
                        <div className="main-heading-lines"></div>
                        <h1>Ashby Willimott's portfolio showcase.</h1>
                        <div className="main-heading-lines"></div>
                    </div>
                    <div>
                        <h1>CV is story</h1>
                        <h1>Showcase projects</h1>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Home