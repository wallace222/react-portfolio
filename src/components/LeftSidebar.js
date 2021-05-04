import React, { useState } from 'react';

import '../style/Sidebar.css'

// right now I want for me to start by trying out.
// I will start by trying out


function LeftSideBar() {
    return (
        <>
            <div>
                <h1>Here it is your responsibility to add an image</h1>
                <img className="left-sidebar" src={require('../images/sidebar.jpg').default} alt=""/>
                {/*  I have managed to import the image but it no show */}
            
            </div>
        {/* Here I will send the right side of the image. and cut it in half in the process */}
        </>
    )
}

export default LeftSideBar