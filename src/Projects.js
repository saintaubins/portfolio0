import React, { useEffect } from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
//import { Route, Switch, __RouterContext } from 'react-router-dom';
import cardGame from '../src/assets/cardGame.png';
import memGame from '../src/assets/memGame.png';
import portfolio from '../src/assets/portfolio.png';
import jobSearch from '../src/assets/jobSearch.png';
import docOffice from '../src/assets/docOffice.png';
import travel from '../src/assets/travel.png';
import todo from '../src/assets/Todo.png';
import weather from '../src/assets/weather.png';
import bug from '../src/assets/bug.png';
import chat from '../src/assets/chat.png';
import flaskCrud from '../src/assets/flaskCrud.png';
import flaskFeedback from '../src/assets/flaskFeedback.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
//import { useTransition, animated } from 'react-spring';

const Styles = styled.div`
    .projects {
        background-image: url('https://images.unsplash.com/photo-1582634046772-e68ad47e5e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        border-radius: 7px;
        box-shadow: 10px 10px 10px 10px black;
        opacity: 0.8;
       
    }
    .grid-container {
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
    }
    @media screen and (max-width:1395px) {
        .grid-container {
            display: inline-grid;
            grid-template-columns: auto auto auto;
        }
    }
    @media screen and (max-width:1050px) {
        .grid-container {
            display: inline-grid;
            grid-template-columns: auto auto;
        }
    }
    @media screen and (max-width:700px) {
        .grid-container {
            display: inline-grid;
            grid-template-columns: auto;
        }
        .maincontainer {
            width: 190px;
        }
    }
    .grid-item {
        // background-color: rgba(255, 255, 255, 0.8);
    }
    .maincontainer {
        position: relative;
        width: 250px;
        height: 310px;
        margin: 2rem;
        // width: 100%;
        // height: 100%;

    }
    .thecard {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all 2.3s ease;

    }
    .thecard:hover, .thecard:active {
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
        border: 2.5vh solid transparent;
        border-image: url(https://www.freepnglogos.com/uploads/border-png/double-line-border-png-10.png) 20% round; 
    }
`;

export const Projects = () => {

    useEffect(() => {
       Aos.init({duration: 2000}); 
    }, []);

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
                            {/* <div className='overlay'></div> */}
                            {/* <br></br> */}
                                <center>
                                {/* <br></br> */}
                                <div className = "grid-container">
                                <div className = "grid-item">
                                    <div data-aos="fade-down" className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> My Portfolio. </h3>
                                                    <img src={portfolio} alt='img of portfolio' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div><p>My Portfolio, Built with React, and CSS3.</p>
                                                    <a href='https://github.com/saintaubins/portfolio0' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <br></br>
                                    <br></br> */}
                                    <div className= "grid-item">
                                    <div data-aos="fade-down" className='maincontainer'>
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
                                    </div>
                                    {/* <br></br>
                                    <br></br> */}
                                    <div className= "grid-item">
                                    <div data-aos="fade-down" className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> Bug Tracker. </h3>
                                                    <img src={bug} alt='img of game' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div><p>A Bug Tracking App, with Python, Django, React, CSS.</p>
                                                    <a href='https://evening-atoll-03641.herokuapp.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/react-django-to-do-app' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <br></br>
                                    <br></br> */}
                                    <div className= "grid-item">
                                    <div data-aos="zoom-in-up" className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> Weather App. </h3>
                                                    <img src={weather} alt='img of game' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div><p>A Weather App, Called The Weather  with Python, Django, HTML5, CSS.</p>
                                                    <a href='http://saintaubins.pythonanywhere.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/django_weather' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <br></br>
                                    <br></br> */}
                                    <div className= "grid-item">
                                    <div data-aos="zoom-in-up" className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> Chat App. </h3>
                                                    <img src={chat} alt='img of game' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div><p>A Chat App, Called My Chat with Node, Socket.io, React, Bootstrap.</p>
                                                    <a href='https://sharp-swirles-7b70ab.netlify.app/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/react_chat_app' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <br></br>
                                    <br></br> */}
                                    <div className= "grid-item">
                                    <div data-aos="zoom-in-up" className='maincontainer'>
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
                                    </div>
                                    {/* <br></br>
                                    <br></br> */}
                                    <div className= "grid-item">
                                    <div data-aos="zoom-in-down"className='maincontainer'>
                                        <div  className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3>My Todo. </h3> 
                                                    <img src={todo} alt='img of search' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img>
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div>
                                                    <p>A Todo App with Frontend Angular, styling with Bootstrap,Spring Boot Backend.</p>
                                                    <a href='https://brave-ardinghelli-7b44c2.netlify.app/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/angular-todo' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Frontend Code</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <br></br>
                                    <br></br> */}
                                    <div className= "grid-item">
                                    <div data-aos="zoom-in-down" className='maincontainer'>
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
                                                            <p>Click here to see the Frontend Code</p>
                                                        </a>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    {/* <br></br>
                                    <br></br> */}
                                    <div className= "grid-item">
                                    <div data-aos="zoom-in-down" className='maincontainer'>
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
                                </div>
                                <div className= "grid-item">
                                    <div data-aos="fade-down" className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> Travel App. </h3>
                                                    <img src={travel} alt='img of game' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div><p>A Travel App, Called Sem's travel  with Python, Django, HTML5, CSS.</p>
                                                    <a href='https://travel-app-ss.herokuapp.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/django_travel' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                
                                <div className= "grid-item">
                                    <div data-aos="fade-down" className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> Flask Survey API. </h3>
                                                    <img src={flaskFeedback} alt='img of game' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div><p>A Flask, feedback API, with Python, Email, HTML5.</p>
                                                    <a href='https://porschefeedback.herokuapp.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/flask_feedback_app' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
                                                    </a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className= "grid-item">
                                    <div data-aos="fade-down" className='maincontainer'>
                                        <div className='thecard'>
                                            <div className='thefront'>
                                                <div>
                                                    <h3> Flask Crud API. </h3>
                                                    <img src={flaskCrud} alt='img of game' style={{'width':'100%', 'borderRadius':'7px', 'boxShadow':'7px 7px 7px black'}}></img> 
                                                </div> 
                                            </div>
                                            <div className='theback'>
                                                <div><p>A Flask Sql Crud, with Python, postgres, HTML5.</p>
                                                    <a href='https://flask-sql-crud.herokuapp.com/'
                                                        target='_blank' rel="noopener noreferrer" 
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the project</p>
                                                    </a>
                                                    <a href='https://github.com/saintaubins/flask-crud-app' 
                                                        target='_blank' rel='noopener noreferrer'
                                                        style={{'textDecoration': 'none', 'color': 'white'}}>
                                                        <p>Click here to see the Code</p>
                                                    </a>
                                                </div> 
                                            </div>
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