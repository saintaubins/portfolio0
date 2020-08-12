import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

// import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const Styles = styled.div`
    .navbar {
        background-color: #222;
        // font-family: Shadows Into Light
    }
    a, .navbar-brand, .navbar-nav, .nav-link {
         color: #bbb;

        &:hover {
            color: white;
            // color: rgba(64, 112, 64, 0.6);
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand style={{'color':'white'}} href='/'>Sem Saint-Aubin</Navbar.Brand>
            <Navbar.Toggle style={{'backgroundColor':'#bbb'}}aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Item>
                            <Link to='/'>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Link to='/skills'>Skills</Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                            <Link to='/resume'>Resume</Link>
                    </Nav.Item> */}
                    <Nav.Item>
                            <Link to='/projects'>Projects</Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Link to='/contact'>Contact</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)