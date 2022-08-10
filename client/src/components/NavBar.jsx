import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Offcanvas} from "react-bootstrap";
import styles from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <div className={`${styles.navbarPadding}`}>
                            <Navbar.Brand href="#home">IT-training</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto" variant="tabs" defaultActiveKey="/">
                                    <Nav.Link href="/events"><span className={`${styles.textWhite}`}>Мероприятия</span></Nav.Link>
                                    <Nav.Link href="/students"><span className={`${styles.textWhite}`}>Студенты</span></Nav.Link>
                                    <Nav.Link eventKey="companies"><span className={`${styles.textWhite}`}>Компании</span></Nav.Link>
                                    <Nav.Link eventKey="documents"><span className={`${styles.textWhite}`}>Документы</span></Nav.Link>
                                </Nav>
                                <Nav>
                                    <NavDropdown title="Admin" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Профиль</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Выйти</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
            </Navbar>
        </div>
    );
};

/*<Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Мероприятия</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/students">Студенты</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="companies">Компании</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="documents">Документы</Nav.Link>
                </Nav.Item>
            </Nav>*/

export default NavBar;