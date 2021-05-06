import React from 'react'

function Home(props) {

    // For now what I should do is just focus on building onto the css of the home page.
    return(
        <>
        {/* ok what do I need to accomplish with the style of my page.
        When I go to style the home page.
        
        1. Titles are in the middle of the page horizontally.
        
        2. I would like for their to be more space inbetween my lines in my pharagraphs
        
        3. I would like for all of the sub headings and for all of the pharagraphs to have a grey color to them rather than pitch black to bring out the main heading.
        
        4. I would like for the main heading to be slightly seperated from the rest of the contents

        */}
            <div>
                <h1>Welcome to Ashby Willimott's portfolio showcase.</h1>

                <h3>Story</h3>

                <p>
                    I am a passionate software developer currently living in the Auckland region.
                    <br/>
                    I would like to thank my father who was the one who introduced me to the tech world.
                    <br/>
                    Through the scripting language python.
                    <br/>
                    Which projects I had built over this time included such things as multi choice adventures and climaxed
                    with an amazing card game script of black jack. With a everything to user input and all the conditionals to get a working dealer.
                    It was fun but it was not enough to progress my skills.
                    <br/>
                    After that I saught further mentorship. So I left my job to attend a bootcamp.
                    <br/>
                    My bootcamp of choice was 'Enspiral Dev Academy'. Which I am pretty hard to be convinced was the most fun I have had building projects,
                    Especially working with the other students.
                    <br/>
                    Now that my time at the bootcamp is over, I have my sights on producing polished, refined projects in the field of tech.
                </p>

                <h3>To any Fellow travelers</h3>

                <p>
                    I am always looking to collaborate with new and interesting people who share an interest in technology.
                    If anyone would like for me to contribute to any projects or contribute to any of my projects.
                    My socials are open and I don't bite. 
                </p>
            
            </div>
        </>
    )
}

export default Home