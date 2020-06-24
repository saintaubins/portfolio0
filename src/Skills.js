import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './App.css';

const photos = [
    {
        name: 'Photo 1',
        url: 'https://www.qweb.com.mx/wp-content/uploads/2018/06/1499794874html5-js-css3-logo-png.png'
    },
    {
        name: 'Photo 2',
        url: 'https://miro.medium.com/max/3176/1*h-xRzZOCHk8jTlEa8M42GA.png'
    },
    {
        name: 'Photo 3',
        url: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/104647991/original/713f5097b5d34cd41d807bf8b16b08950a2df875/do-web-development-using-python-django.png'
    },
    {
        name: 'Photo 4',
        url: 'https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/1/6mMCTFkRS0SlRIHIuOfQ_testing-react-components-with-enzyme-jest.jpg'
    },
    {
        name: 'Photo 5',
        url: 'https://www.pikpng.com/pngl/m/396-3962104_mern-stack-crash-course-mongodb-clipart.png'
    },
    {
        name: 'Photo 6',
        url: 'https://miro.medium.com/max/5336/1*R8dpDe1F8LIgCrN1QTfVBw.png'
    },
    {
        name: 'Photo 7',
        url: 'https://miro.medium.com/max/480/1*qgcaFqBSgNhsQQNpepIagA.png'
    },
    {
        name: 'Photo 8',
        url: 'https://www.netlify.com/img/press/logos/full-logo-dark.png'
    },
    {
        name: 'Photo 9',
        url: 'https://i.imgur.com/QZownhg.png'
    },
    {
        name: 'Photo 10',
        url: 'http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Github-icon.png'
    },
    {
        name: 'Photo 11',
        url: 'http://rubix.sketchpixy.com/imgs/homepage/bootstrapreact.png'
    },
    
]

export const Skills = () => {
    const settings = {
        dots: false,
        fade: true,
        centerMode: true,
        adaptiveHeight: true,
        infinite: true,
        useCSS: true,
        //dotsClass: "slick-dots",
        swipeToSlide: true,
        swipe: true,
        pauseOnHover: false,
        autoplaySpeed: 1150,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        //className: "slides2"
    }
    
    //get settings from => https://react-slick.neostack.com/
    return (
        <React.Fragment>
            <div style={{
                'padding':'5%',
                'background':'rgba(0,0,0,0.8)', 
                'margin':'0',
                'boxShadow': '10px 10px 10px black',
                'position': 'absolute',
                'height': '1400px',
                //'width': '50%'
                }} className="position-absolute w-100">
                <div style={{
                    'borderRadius': '7px',
                    'boxShadow': '10px 10px 10px darkgrey',
                    'padding': '5%',
                    'margin':'0', 
                    'backgroundColor': 'rgba(0, 0, 0, 0.6)',
                    'color': 'darkgrey'
                }} >
                    <Slider {...settings}>
                        {photos.map((photo) => {
                            return(
                                <div key={photo.name}>
                                    <center>
                                        <img style={{
                                        'borderRadius': '7px',
                                        'boxShadow': '10px 10px 10px darkgrey',
                                        }}  width='250px' height='300px' src={photo.url} alt='pictures of Skills'/>
                                    </center>   
                                </div>
                            )
                        })}
                    </Slider>
                    <br></br>
                    <h4>Skills:</h4>
                    <h5>Frontend:</h5>
                    <p>&emsp;HTML5, CSS3, JavaScript, React, Bootstrap, Sass, NextJs, Gatsby, User Interface (UI), User Experience (UX).</p>
                    <h5>Backend:</h5>
                    <p>&emsp;Python Django, NodeJs, Express, Firebase, Restful API's.</p>
                    <h5>Databases:</h5>
                    <p>&emsp;MongoDb, PostgresqL, MySQL, JSON, XML.</p>
                    <h5>Testing:</h5>
                    <p>&emsp;Jest, Enzyme, Mocha, Chai, Supertest.</p>
                    <h5>Deployment:</h5>
                    <p>&emsp;Github Pages, Netlify, Heroku.</p>
                    <h5>I.T.:</h5>
                    <p>&emsp;TCP/IP, DHCP, ARP, PING, FTP, IPCONFIG, TRACERT, TELNET, DOS, CLI, A+, Net+, MCP, CNA.</p>
                    <h5>Interpersonal:</h5>
                    <p>&emsp;Marine Corps Veteran, Attention to detail, Courtesy, Fairness, Time management, Enthusiasm, Endurance.</p>
                    <br></br>
                </div> 
            </div>
        </React.Fragment>
    )
}