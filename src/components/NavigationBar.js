import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const Styles = styled.div`
    .navbar {
        background-color: #222;
        font-family: Shadows Into Light
    }
    a, .navbar-brand, .navbar-nav .nav-link {
         color: #bbb;

        &:hover {
            color: rgba(64, 112, 64, 0.6);
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand style={{'color':'white'}} href='/'>Sem Saint-Aubin</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <NavbarCollapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/about'>Skills</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/resume'>Resume</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/projects'>Projects</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/contact'>Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    </Styles>
)