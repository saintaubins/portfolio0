import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faHtml5,
    faCss3,
    faGithub,
    faPython,
    faNodeJs,
    faJava,
    //feHeroku,
    //faMocha
} from '@fortawesome/free-brands-svg-icons';
import './App.css';
// import nyPark1 from './assets/nyPark1.jpg';

const Styles = styled.div`
    .nyPark {
        background: url('https://images.unsplash.com/photo-1582634046772-e68ad47e5e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80') no-repeat fixed bottom;
        //background-size: cover;
        color: #ccc;
        //height: 100%;
        position: relative;
        // z-index: -2;
        border-radius: 7px;
        box-shadow: 10px 10px 10px black;
        //font-family: Shadows Into Light;
        text-align: center;
        //opacity: 0.9;
        margin: 0;
    }
    // .overlay {
    //     background-color: #000;
    //     opacity: 0.2;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     bottom: 0;
    //     right: 0;
    //     z-index: 1;
    //     border-radius: 10px;
    //     // box-shadow: 5px 5px 5px;

    // }
    .maincontainer {
        position: relative;
        width: 250px;
        height: 320px;
       

    }
    .thecard {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all 2.3s ease;
        // background: yellow;
    }
    .thecard:hover {
        transform: rotateY(180deg);
    }
    .thecard:active {
        transform: rotateY(180deg);
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
        transform: rotateY(180deg);
        box-shadow: 5px 5px 5px rgba(0,0,0,0.9);
        padding: 1%; 
    }
`;

export const Home = () => {
    
    return (
        <React.Fragment>
            <div className="position-absolute w-100"  style={{
                // 'borderRadius': '5px',
                // 'boxShadow': '5px 5px 5px',
                 'padding':'5%',
                 'background': 'rgba(0,0,0,0.8)',
                 'margin': '0'
            }}>
                <Styles>
                    <Jumbo fluid className='nyPark'>
                        <div className='overlay'></div>
                        <center>
                            <div className='maincontainer'>
                                <div className='thecard'>
                                    <div className='thefront'>
                                        <h2>What Can I offer ?</h2>
                                    </div>
                                    <div className='theback'>
                                        <h2>Front End Service !</h2>
                                        <img style={{
                                            'width': '100%',
                                            'borderRadius': '7px'
                                        }}
                                        src='https://cdn-media-1.freecodecamp.org/images/1*LMEECiXhk715h-VCFyb-GA.jpeg' alt='logo.png'></img>
                                    </div>
                                </div>
                            </div> <br></br>
                            <div className='maincontainer'>
                                <div className='thecard'>
                                    <div className='thefront'>
                                        <h2>What else Can I offer ?</h2>
                                    </div>
                                    <div className='theback'>
                                        <h2>Back End Service !</h2>
                                        <img style={{
                                            'width': '100%',
                                            'borderRadius': '7px'
                                        }} alt='logo.png'
                                        src='data:image/png;base64,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'></img>
                                    </div>
                                </div>
                            </div><br></br>
                            <div className='maincontainer'>
                                <div className='thecard'>
                                    <div className='thefront'>
                                        <h2>Flip This card to See a list of My Skills !</h2>
                                    </div>
                                        <div className='theback'>
                                        
                                        <FontAwesomeIcon icon={faHtml5} size='3x' />
                                        <FontAwesomeIcon icon={faCss3} size='3x' />
                                        <FontAwesomeIcon icon={faReact} size='3x' />
                                        <FontAwesomeIcon icon={faGithub} size='3x' />
                                        <FontAwesomeIcon icon={faPython} size='3x' />
                                        <FontAwesomeIcon icon={faNodeJs} size='3x' />
                                        <FontAwesomeIcon icon={faJava} size='3x' />
                                        {/* <FontAwesomeIcon icon={faHeroku} size='3x' /> */}
                                        {/* <FontAwesomeIcon icon={faMocha} size='3x' /> */}
                                        <h3>These skills are Only a few of my Stack, Please Also Visit the Skills Link Above to see more of my skills !</h3>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </Jumbo>
                </Styles> 
            </div> 
        </React.Fragment>
    );
}
