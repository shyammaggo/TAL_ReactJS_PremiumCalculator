import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';


const navigation = (props) => {
    return (
        <Col md={12} >
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                    <Nav>
                        
                        <LinkContainer to={'/Home'} exact>
                            <NavItem eventKey={1}>
                                Premium Calculator
                            </NavItem>
                        </LinkContainer>
                       
                        <LinkContainer to={'/contact-us'}>
                            <NavItem eventKey={2}>
                                Contact Us
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    )
}
export default navigation;