import React from 'react';

export const Contact = () => (
    <>
    <div style={{
        'padding':'5%',
        'background':'rgba(0,0,0,0.8)', 
        'margin':'0',
        'boxShadow': '10px 10px 10px black',
        'position': 'absolute',
        'height': '1000px'
        }} className="position-absolute w-100">
        <div  style={{
            'borderRadius': '7px',
            'boxShadow': '15px 15px 15px rgba(0,0,0,0.6)',
            'background': 'rgba(0,0,0,0.7)',
            'padding': '5%',
            'margin': '3%',
            'color': 'lightgrey',
            'border': '100px solid transparent',
            'border-image': 'url(https://webstockreview.net/images/picture-border-png-3.png) 20% round',
            //'font-family': 'Shadows Into Light'
            }}> 
            <center>
                <h2>Contact Me</h2>
                <p>Email: saintaubins@gmail.com</p>
                <p>LinkedIn: https://www.linkedin.com/in/sem-saint-aubin/</p>
                <p>Cell Phone: 516-429-8578</p>
            </center>
        </div> 
        </div>
    </>
)