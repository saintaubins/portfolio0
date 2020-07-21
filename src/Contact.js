import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//Got help from here => https://www.youtube.com/watch?v=zq0TuNqV0Ew

firebase.initializeApp({
                apiKey: 'AIzaSyDoONIIx7e6-FtYEK2DfzAvEtDifAb6KFM',
                authDomain: 'portfolio0-auth.firebaseapp.com'
            })
export class Contact extends Component {
    
        state = {
             isSignedIn: false 
        };
        uiConfig = {
            signInFlow: 'popup',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccessWithAuthResult: () => false
            }
        }
        componentDidMount = () => {
            
            firebase.auth().onAuthStateChanged(user => {
                this.setState({isSignedIn: user})
                console.log('user', user)
            })
        }
        
    
    render() {
        const doTransition = () => {
                console.log('Div clicked')
                    // <Spring 
                    //     config={
                    //         mass: 8,
                    //         tension: 100,
                    //         friction: 50,
                    //         clamp: false,
                    //         precision: 0.001,
                    //         velocity: 30,
                    //         delay: 1100,
                    //     } 
                    //     from={
                    //         width: '50%',
                    //         background:
                    //         'linear-gradient(to right, white, blue, red, grey, black)',
                    //         transform:
                    //         'translate3d(0px,0px,0px) scale(1) rotateZ(360deg)',
                    //         boxShadow: '15px 15px 15px  rgba(0,0,0,0.9)',
                    //     }
                    //     to={
                    //         transitionDuration: '0.7s',
                    //         width: '50%',
                    //         padding: '15px',
                    //         background:
                    //         'linear-gradient(to right, white, blue, red, grey, black)',
                    //         transform:
                    //         'translate3d(0px,0px,0px) scale(1) rotateX(0deg)',
                    //         boxShadow: '15px 15px 15px rgba(0,0,0,0.9)',
                    //         borderRadius: '7px'
                    //     }>
                    //     {props => <div style={{props}}><h2 className='lG'>Sem Saint-Aubin</h2></div>}
                    // </Spring>
    
        }
        
        return (
            <React.Fragment>
            <div className='Contact'>
                <br />
                {this.state.isSignedIn ? (
                    <center>
                        <br />
                            <span>
                                <div>Hello You Are Signed In!</div> <br />
                                <button onClick={() => firebase.auth().signOut()}>Sign out!</button> <br />
                                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                                <img alt="profile" style={{'width': '175px'}}
                                src={firebase.auth().currentUser.photoURL}
                                /> <br />
                            </span>
                        <br />
                    </center>
                ) : (
                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                )}
            </div>
            
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
                        'borderImage': 'url(https://webstockreview.net/images/picture-border-png-3.png) 20% round',
                    }}> 
                        <center>
                            <div style={{wordWrap:'break-word', whiteSpace: 'normal'}}><h2 className='lG'>Contact Me</h2></div><br></br>
                            <div style={{wordWrap:'break-word', whiteSpace: 'normal'}}><a href="mailto:saintaubins@gmail.com? subject='Lets Connect' " target='_blank' rel="noopener noreferrer" className='lG'>Email: saintaubins@gmail.com</a></div>
                            <br></br>
                            <div style={{wordWrap:'break-word', whiteSpace: 'normal'}}><a href='https://www.linkedin.com/in/sem-saint-aubin/' target='_blank' rel="noopener noreferrer" className='lG'>LinkedIn: https://www.linkedin.com/in/sem-saint-aubin</a></div>
                            <br></br>
                            <div style={{wordWrap:'break-word', whiteSpace: 'normal'}}><a href='https://github.com/saintaubins' target='_blank' rel="noopener noreferrer" className='lG'>Github: https://github.com/saintaubins</a></div>
                            <br></br>
                            <div style={{wordWrap:'break-word', whiteSpace: 'normal'}}><p className='lG'>Cell Phone: 516-429-8578</p></div>
                        </center>
                    </div> 
                    <center>
                        <div onClick={doTransition}>
                            <Spring 
                                config={{
                                    mass: 8,
                                    tension: 100,
                                    friction: 50,
                                    clamp: false,
                                    precision: 0.001,
                                    velocity: 30,
                                    delay: 1100,
                                }} 
                                from={{
                                    width: '50%',
                                    background:
                                    'linear-gradient(to right, white, blue, red, grey, black)',
                                    transform:
                                    'translate3d(0px,0px,0px) scale(1) rotateZ(360deg)',
                                    boxShadow: '15px 15px 15px  rgba(0,0,0,0.9)',
                                }}
                                to={{
                                    transitionDuration: '0.7s',
                                    width: '50%',
                                    padding: '15px',
                                    background:
                                    'linear-gradient(to right, white, blue, red, grey, black)',
                                    transform:
                                    'translate3d(0px,0px,0px) scale(1) rotateX(0deg)',
                                    boxShadow: '15px 15px 15px rgba(0,0,0,0.9)',
                                    borderRadius: '7px',
                                }}>
                                {props => <div style={props}><h2 className='lG'>Sem Saint-Aubin</h2></div>}
                            </Spring>
                        </div>
                    </center>
                </div>
            </React.Fragment>
        )
    }
};

export default Contact;