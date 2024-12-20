import React from 'react';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" className="nav-background">
            <Container fluid>
                <Navbar.Brand className='nav-padding-left d-flex align-items-center' href="#home">
                    <Image src="./logo.png" className='logo-width'/>
                    <Navbar.Text className='brand-text p-3'>$Pumps</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="menu-item menu-selected" href="#home">Home</Nav.Link>
                    <Nav.Link className="menu-item" href="#link">About Us</Nav.Link>
                    <Nav.Link className="menu-item" href="#link">Buy TBA</Nav.Link>
                    <Nav.Link className="menu-item" href="#link">Community</Nav.Link>
                    <Nav.Link className="menu-item" href="#link">Roadmap</Nav.Link>
                    <Nav.Link className="menu-item" href="#link">Governance</Nav.Link>
                    <Nav.Link className="menu-item" href="#link">Tokenomics</Nav.Link>
                </Nav>
                <div className='px-5 d-flex justify-content-center gap-5'>
                    <Image className='mx-2 cursor-pointer' src="./telegram.svg" width={43}/>
                    <Image className='mx-2 cursor-pointer' src="./twitter.png" width={43}/>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;