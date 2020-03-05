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
        url: 'https://i0.wp.com/everyday.codes/wp-content/uploads/2019/12/jest-enzyme-1.png?fit=1200%2C704&ssl=1'
    },
    {
        name: 'Photo 5',
        url: 'https://geeksperhour.com/wp-content/uploads/2019/02/mern-img.png'
    }
]

export const About = () => {
    const settings = {
        dots: true,
        fade: true,
        adaptiveHeight: true,
        infinite: true,
        //speed: 1000,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides2"
    }
    //get settings from => https://react-slick.neostack.com/
    return (
        <React.Fragment>
            <div style={{'padding':'5%'}} className="position-absolute w-100">
                <div style={{
                    'borderRadius': '10px',
                    'boxShadow': '10px 10px 10px darkgrey',
                    'padding': '5%',
                    'margin':'0', 
                    'background-color': 'rgba(0, 0, 0, 0.8)',
                    'color': 'darkgrey'
                }} className="position-absolute w-100">
                    <Slider {...settings}>
                        {photos.map((photo) => {
                            return(
                                <div>
                                    <center>
                                        <img style={{
                                        'border-radius': '10px',
                                        'boxShadow': '5px 5px 5px darkgrey',
                                        }}  width='90%' height='80%'src={photo.url} alt='pictures of Sem'/>
                                    </center>   
                                </div>
                            )
                        })}
                    </Slider>
                </div> 
            </div>
        </React.Fragment>
    )
}