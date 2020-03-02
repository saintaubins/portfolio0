import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './App.css';

const photos = [
    {
        name: 'Photo 1',
        url: 'https://images.unsplash.com/photo-1518933165971-611dbc9c412d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
        name: 'Photo 2',
        url: 'https://images.unsplash.com/photo-1552120476-9ee56c8611f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
        name: 'Photo 3',
        url: 'https://images.unsplash.com/photo-1555680510-34daedadbdb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
        name: 'Photo 4',
        url: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    }
]

export const About = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides2"
    }
    return (
        <>
            <div style={{
                'borderRadius': '10px',
                'boxShadow': '5px 5px 5px',
                'padding': '5%',
                'margin':'0', 
                'background-color': 'rgb(64, 112, 64)'
            }} className="position-absolute w-100">
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div>
                                <center>
                                    <img style={{
                                    'border-radius': '10px',
                                    'boxShadow': '5px 5px 5px',
                                    }}  width='90%' height='80%'src={photo.url} alt='pictures of Sem'/>
                                </center>   
                            </div>
                        )
                    })}
                </Slider>
            </div> 
        </>
    )
}