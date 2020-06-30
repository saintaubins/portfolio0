import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
//import { Route, Switch, __RouterContext } from 'react-router-dom';
import cardGame from '../src/assets/cardGame.png';
import memGame from '../src/assets/memGame.png';
import jobSearch from '../src/assets/jobSearch.png';
import docOffice from '../src/assets/docOffice.png';
//import { useTransition, animated } from 'react-spring';

const Styles = styled.div`
    .projects {
        background-image: url('https://images.unsplash.com/photo-1582634046772-e68ad47e5e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        border-radius: 7px;
        box-shadow: 10px 10px 10px black;
        opacity: 0.8;
       
    }
    .maincontainer {
        position: relative;
        width: 250px;
        height: 310px;
    }
    .thecard {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all 2.3s ease;
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
        border-radius: 7px;
        color: white;
        box-shadow: 7px 7px 7px rgba(0,0,0,0.8);
        padding: 1%; 
        border: 4vh solid transparent;
        border-image: url(https://www.freepnglogos.com/uploads/border-png/double-line-border-png-10.png) 20% round;
    }
    .theback {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background: rgba(0,0,0,0.7);
        color: white;
        border-radius: 7px;
        transform: rotateX(180deg);
        box-shadow: 7px 7px 7px rgba(0,0,0,0.9);
        padding: 1%;
        border: 2.5vh solid transparent;
        border-image: url(https://www.freepnglogos.com/uploads/border-png/double-line-border-png-10.png) 20% round; 
    }
`;

export const Projects = () => {

    function flipCard() {
        console.log('called function')
        //transform: rotateX(180deg);
        //translateX(180deg);
        //const { location } = useContext(__RouterContext);
//         const transitions = useTransition(location, location => location.pathname, {
//         from: { opacity: 0, transform: "translate3d(100%,0,0)" },
//         enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
//         leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
//   });
    }
    return (
        <React.Fragment>
            <div className="position-absolute w-100" style={{
                'padding':'5%',
                'background':'rgba(0,0,0,0.8)', 
                'margin':'0'
            }}>
                    {/* <div style={{
                        'border': '100px solid transparent',
                        'borderImage': 'url(https://www.freepnglogos.com/uploads/border-png/deco-border-transparent-31.png) 20% round',
                        'margin':'0', 
                    }}> */}
                        <Styles>
                            <Jumbo fluid className='projects'>
                            <div className='overlay'></div>
                            <br></br>
                                <center>
                                    
                                    <br></br>
                                    <div className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> Memory Game. </h3>
                                                    <img src={memGame} alt='img of game' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div><p>An Memory game, Called Simon  with JavaScript, CSS3, HTML5.</p>
                                                    <a href='https://saintaubins.github.io/MemoryGame/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/MemoryGame' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
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
                                                    <img src={jobSearch} alt='img of search' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img>
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div>
                                                    <p>A Job Search App with Frontend React, styling with react Bootstrap, Github API Backend.</p>
                                                    <a href='https://eager-mahavira-49cb5b.netlify.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/JobSearch/tree/master/jobposts' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
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
                                                        <img src={docOffice} alt='img of docOffice' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img>
                                                    </div> 
                                                </div>
                                                <div className='theback'>
                                                    <div>
                                                        <p>A Doctor's Office App with Backend Firebase, Frontend React, and styling with react Bootstrap.</p>
                                                        <a href='https://seiproj4.herokuapp.com/'
                                                            target='_blank' rel="noopener noreferrer" 
                                                            style={{'textDecoration': 'none', 'color': 'white'}}>
                                                            <p>Click here to see the project</p>
                                                        </a>
                                                        <a href='https://github.com/saintaubins/doctorsOffice' 
                                                            target='_blank' rel='noopener noreferrer'
                                                            style={{'textDecoration': 'none', 'color': 'white'}}>
                                                            <p>Click here to see the Code</p>
                                                        </a>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    <br></br>
                                    <div onClick={flipCard} className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3>G.A. Card Game.</h3>
                                                    <img src={cardGame} alt='img of game' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img>
                                                </div> 
                                            </div>
                                                <div className='theback'>
                                                    <div>
                                                    <p>An intuitive card game, with JavaScript, CSS3, HTML5.</p>
                                                    <a href='https://flamboyant-allen-c08689.netlify.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://flamboyant-allen-c08689.netlify.com/' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </Jumbo>
                        </Styles>
                    {/* </div>  */}
                </div>
        </React.Fragment>
    );
}