import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import './App.css';
import cardGame from '../src/assets/cardGame.png';
import memGame from '../src/assets/memGame.png';
import jobSearch from '../src/assets/jobSearch.png';
import docOffice from '../src/assets/docOffice.png';

const Styles = styled.div`
    .projects {
        background: url('https://images.unsplash.com/photo-1582634046772-e68ad47e5e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80') no-repeat fixed bottom;
        background-size: cover;
        color: white;
        text-shadow: 4px 4px black;
        height: 100%;
        position: relative;
        // z-index: -2;
        border-radius: 7px;
        box-shadow: 10px 10px 10px black;
        //font-family: Shadows Into Light;
        text-align: center;
        opacity: 0.9;
        margin: 0;
    }
   
    .maincontainer {
        position: relative;
        width: 25%;
        height: 230px;
    }
    .thecard {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all 2s ease;
         //background: yellow;
    }
    .thecard:hover {
        transform: rotateX(180deg);
    }
    .thefront {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background: rgba(0,0,0,0.7);
        border-radius: 10px;
        color: white;
        box-shadow: 10px 10px 10px rgba(0,0,0,0.8);
        padding: 1%; 
        border: 10px solid transparent;
        padding: 15px;
        border-image: url(https://www.freepnglogos.com/uploads/border-png/double-line-border-png-10.png) 20% round;
    }
    .theback {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background: rgba(0,0,0,0.7);
        color: white;
        border-radius: 10px;
        transform: rotateX(180deg);
        box-shadow: 5px 5px 5px rgba(0,0,0,0.9);
        padding: 10%; 
    }
`;

export const Projects = () => {
    return (
        <React.Fragment>
            <div className="position-absolute w-100" style={{
                'padding':'5%',
                'background':'rgba(0,0,0,0.8)', 
                'margin':'0',
                //'boxShadow': '10px 10px 10px black',
                //'position': 'absolute',
                //'height': '1900px'
                }} >
                    <div  style={{
                        //'borderRadius': '10px',
                        //'boxShadow': '15px 15px 15px rgba(0,0,0,0.9)',
                        //'textAlign': 'center',
                        //'background': 'rgba(0,0,0,0.6)',
                        //'color': 'white',
                        //'border': '100px solid transparent',
                        //'border-image': 'url(https://www.freepnglogos.com/uploads/border-png/deco-border-transparent-31.png) 20% round', 
                    }}>
                        <Styles>
                            <Jumbo fluid className='projects'>
                            <br></br>
                                <center>
                                    <div className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3>G.A. Card Game.</h3>
                                                    <img src={cardGame} style={{'width':'50%', 'height':'20%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img>
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div>
                                                    <a href='https://flamboyant-allen-c08689.netlify.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>An intuitive card game, with JavaScript, CSS3, HTML5.</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> Memory Game. </h3>
                                                    <img src={memGame} style={{'width':'50%', 'height':'20%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div>
                                                <a href='https://saintaubins.github.io/MemoryGame/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                            An Memory game, Called Simon  with JavaScript, CSS3, HTML5.
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3>Job Search. </h3> 
                                                    <img src={jobSearch} style={{'width':'50%', 'height':'20%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img>
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div>
                                                <a href='https://eager-mahavira-49cb5b.netlify.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                            A Job Search App with React, Bootstrap, Github API Backend.
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className='maincontainer'>
                                            <div className='thecard'>
                                                <div className='thefront'>
                                                    <div>
                                                        <h3>Doctor's Office.</h3>  
                                                        <img src={docOffice} style={{'width':'50%', 'height':'20%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img>
                                                    </div> 
                                                </div>
                                                <div className='theback'>
                                                    <div>
                                                    <a href='https://seiproj4.herokuapp.com/'
                                                            target='_blank' rel="noopener noreferrer" 
                                                            style={{'textDecoration': 'none', 'color': 'white'}}>
                                                                A Doctor's Office App with Firebase, React, and Bootstrap.
                                                        </a>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    <br></br>
                                </center>
                            </Jumbo>
                        </Styles>
                    </div> 
                </div>
        </React.Fragment>
    );
}