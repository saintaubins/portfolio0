import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import navBack from '../assets/navBack.png'

const Styles = styled.div`
    .nyBackG {
        background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM7eYiDSqafWoY5_T02u_59vq-S4uOtrIwsVdcFFNmnjh2t35h) no-repeat fixed bottom;
        background-size: cover;
        //background-position: 50% 50%;
        //vertical-align: middle;
        //margin: 0;
        padding: 0;
        background-repeat: no-repeat;
        //color: #ccc;
        height: 300px;
        //width: 100%;
        position: relative;
        z-index: -1;
        border-radius: 10px;
        box-shadow: 5px 5px 5px;
        //font-family: Shadows Into Light
    }
    .overlay {
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        border-radius: 10px;
        box-shadow: 5px 5px 5px;

    }
    .rain {
        height: 100%;
        background: url(https://static.wixstatic.com/media/2cd43b_542ae4ee2d6d46eb8b754f6f71dd35b6~mv2.png/v1/fill/w_320,h_212,fp_0.50_0.50/2cd43b_542ae4ee2d6d46eb8b754f6f71dd35b6~mv2.png);
        animation: rain .4s linear infinite; 
    }
    .rain:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        animation: lighting 10s linear infinite;
        opacity: 0;
    }
    @keyframes rain {
        0%
        {
            background-position: 0% 0%;
        }
        100%
        {
            background-position: 20% 100%;
        }
    }
    @keyframes lighting {
        0%
        {
            opacity: 0;
        }
        10%
        {
            opacity: 0;
        }
        11%
        {
            opacity: 1;
        }
        14%
        {
            opacity: 0;
        }
        20%
        {
            opacity: 0;
        }
        21%
        {
            opacity: 1;
        }
        24%
        {
            opacity: 0;
        }
        104%
        {
            opacity: 0;
        }
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='nyBackG'>
            <div className='overlay'></div>
            <div className='rain'></div>
            <Container>
                <div style={{'z-index':'-1'}}>
                    <h1>Welcome</h1>
                    <p>Just a Little Rain and Ligtining, Above.</p>
                </div>
            </Container>
        </Jumbo>
    </Styles>
)