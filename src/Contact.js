import React from 'react';
import { Spring, config, animated } from 'react-spring/renderprops';
//import {GradientPinkRed as Gradient } from 'gradient';
//import * as easings from 'd3-ease';

//console.log(easings)

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
        <div style={{
            'borderRadius': '7px',
            'boxShadow': '15px 15px 15px rgba(0,0,0,0.6)',
            'background': 'rgba(0,0,0,0.7)',
            'padding': '1%',
            'margin': '10%',
            'color': 'lightgrey',
            'border': '50px solid transparent',
            'border-image': 'url(https://webstockreview.net/images/picture-border-png-3.png) 20% round',
            //'font-family': 'Shadows Into Light'
            }}> 
            <center>
                <div><h2 className='lG'>Contact Me</h2></div><br></br>
                <div><a href="mailto:saintaubins@gmail.com? subject='Lets Connect' " target='_blank' className='lG'>Email: saintaubins@gmail.com</a></div>
                <br></br>
                <div><a href='https://www.linkedin.com/in/sem-saint-aubin/' target='_blank' className='lG'>LinkedIn: https://www.linkedin.com/in/sem-saint-aubin</a></div>
                <br></br>
                <div><a href='https://github.com/saintaubins' target='_blank' className='lG'>Github: https://github.com/saintaubins</a></div>
                <br></br>
                <div><p className='lG'>Cell Phone: 516-429-8578</p></div>
            </center>
        </div> 
            <center>
                <Spring config={{
                     mass: 1,
                     tension: 70,
                     friction: 50,
                     clamp: false,
                     precision: 0.01,
                     velocity: 250,
                     //delay: 0,

                }}
                    from={{
                        width: '50%',
                        //padding: '15px',
                        background:
                        'linear-gradient(to right, white, blue, grey, rgb(221, 101, 101))',
                        transform:
                        'translate3d(0px,0px,0px) scale(1) rotateZ(360deg)',
                        boxShadow: '15px 15px 15px 10px #2D3747',
                        // borderBottom: '0px solid white',
                        //shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
                        //textShadow: '5px 5px 5px white'
                    }}
                    to={{
                        width: 'auto',
                        padding: '15px',
                        //friction: '50',
                        background:
                        'linear-gradient(to left, white, blue, grey, rgb(221, 101, 101))',
                        transform:
                        'translate3d(0px,0px,0px) scale(1) rotateX(0deg)',
                        boxShadow: '15px 15px 15px rgba(0,0,0,0.9)',
                        // borderBottom: '10px solid #2D3747',
                        textAlign: 'center',
                        borderRadius: '7px',
                        //shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
                        //textShadow: '15px 15px 15px rgba(255,255,255,0.9)'
                    }}>
                    {props => <div style={props}><h2 className='lG'>Sem Saint-Aubin</h2></div>}
                </Spring>
            </center>
        </div>
        
    </>
)