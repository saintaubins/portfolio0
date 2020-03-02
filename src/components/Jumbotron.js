import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import nyPark1 from '../assets/nyPark1.jpg';

const Styles = styled.div`
    .nyPark1 {
        background: url(${nyPark1}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 300px;
        position: relative;
        z-index: -2;
        border-radius: 10px;
        box-shadow: 5px 5px 5px;
        font-family: Shadows Into Light
    }
    .overlay, .overlay1, .overlay2 {
        background-color: #000;
        opacity: 0.6;
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
        <Jumbo fluid className='nyPark1'>
            <div className='overlay1'></div>
            <Container>
                <h1>Welcome</h1>
                <p>Hello, my apologies, this sight is still a work in progress, not that it's broken, it's just not completed yet.</p>
            </Container>
        </Jumbo>
    </Styles>
)