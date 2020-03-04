import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import navBack from '../assets/navBack.jpg'

const Styles = styled.div`
    .nyBackG {
        background: url(${navBack}) no-repeat fixed bottom;
        background-size: cover;
        //background-position: 50% 50%;
        //vertical-align: middle;
        //margin: 0;
        background-repeat: no-repeat;
        color: #ccc;
        //height: 100%;
        //width: 100%;
        position: relative;
        z-index: -1;
        border-radius: 10px;
        box-shadow: 5px 5px 5px;
        font-family: Shadows Into Light
    }
    .overlay {
        background-color: #000;
        opacity: 0.1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        border-radius: 10px;
        box-shadow: 5px 5px 5px;

    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='nyBackG'>
            <div className='overlay'></div>
            <Container>
                <h1>Welcome</h1>
                <p>Hello, my apologies, this sight is still a work in progress.</p>
            </Container>
        </Jumbo>
    </Styles>
)