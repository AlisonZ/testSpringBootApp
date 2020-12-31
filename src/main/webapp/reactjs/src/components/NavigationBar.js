import { Component } from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class NavigationBar extends Component {
    render() {
    return (

     <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Test App</Navbar.Brand>
        <Nav className="testApp-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
        </Nav>
        <Link to="/about">ExtraAbout</Link>
     </Navbar>
    )}
}

export default NavigationBar;
