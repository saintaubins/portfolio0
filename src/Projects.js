import React from 'react';


export const Projects = () => (
    
        <div className="position-absolute w-100" style={{
            'borderRadius': '5px',
            'boxShadow': '5px 5px 5px',
            'textAlign': 'center',
            'padding': '5%',
            
            // 'font-family': 'Shadows Into Light'
            }}>
            <h2>This is a list of my recent projects</h2>
            <br></br>
            <p>I have used the latest technoligies including HTML5, CSS3, Javascript, React, Bootstrap, and countable FE, BE frameworks.</p>
            <br></br>
            <ul>
                <li><a href='https://flamboyant-allen-c08689.netlify.com/'style={{'textDecoration': 'none', 'color': 'green'}}>An intuitive card game, with JavaScript, CSS3, HTML5.</a></li> 
                <br></br>
                <li><a href='https://saintaubins.github.io/MemoryGame/' style={{'textDecoration': 'none', 'color': 'brown'}}>My version of Simon, A Memory Game, with HTML5, CSS3, Bootstrap, and JavaScript.</a></li>
                <br></br>
                <li><a href='https://eager-mahavira-49cb5b.netlify.com/' style={{'textDecoration': 'none', 'color': 'orange'}}>This is a Jobsearch progaram, I created with a React front end Github Jobs, as the API back end stack.</a></li> 
                <br></br>
                <li><a href='https://seiproj4.herokuapp.com/' style={{'textDecoration': 'none', 'color': 'purple'}}>This is a Doctor Office app, I did recently with React and Firebase, there is also Login authentication.</a></li>
                <br></br>
            </ul> 
        </div> 
)