import React from 'react';


export const Projects = () => (
    <>
    <div style={{'padding':'5%'}} className="position-absolute w-100">
        <div className="position-absolute w-100" style={{
            'borderRadius': '10px',
            'boxShadow': '15px 15px 15px rgba(0,0,0,0.9)',
            'textAlign': 'center',
            'background': 'rgba(0,0,0,0.7)',
            'color': 'white',
            //'padding': '5%',
            'border': '100px solid transparent',
            'border-image': 'url(https://www.freepnglogos.com/uploads/border-png/deco-border-transparent-31.png) 20% round',
            
            // 'font-family': 'Shadows Into Light'
        }}>
            <h2>This is a list of my recent projects, they are all links to projects.</h2>
            <br></br>
            <p>I have used the latest technoligies including HTML5, CSS3, Javascript, React, Bootstrap, and countable FE, BE frameworks.</p>
            <br></br>
            <ul>
                <li><a href='https://flamboyant-allen-c08689.netlify.com/'style={{'textDecoration': 'none', 'color': 'white'}}>An intuitive card game, with JavaScript, CSS3, HTML5.</a></li> 
                <br></br>
                <li><a href='https://saintaubins.github.io/MemoryGame/' style={{'textDecoration': 'none', 'color': 'white'}}>My version of Simon, A Memory Game, with HTML5, CSS3, Bootstrap, and JavaScript.</a></li>
                <br></br>
                <li><a href='https://eager-mahavira-49cb5b.netlify.com/' style={{'textDecoration': 'none', 'color': 'white'}}>This is a Jobsearch progaram, I created with a React front end Github Jobs, as the API back end stack.</a></li> 
                <br></br>
                <li><a href='https://seiproj4.herokuapp.com/' style={{'textDecoration': 'none', 'color': 'white'}}>This is a Doctor Office app, I did recently with React and Firebase, there is also Login authentication.</a></li>
                <br></br>
            </ul> 
        </div> 
        </div>
    </>
)