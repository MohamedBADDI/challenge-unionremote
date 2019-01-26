import React , {Component} from 'react'
import {Navbar,NavItem,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import logo from '../../img/logo.png'

class Header extends Component{
    render(){
        return(
            <Navbar fluid className="bg-color">
            <Navbar.Header>
                <Navbar.Brand className="logo_position">  
                <a href="#brand"><img src={logo} className="logo" alt="Logo"/>
                Welcome to the jungle</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight className="arrow_group">
                <NavItem eventKey={1} href="#" className="arrow_move">
                <FontAwesomeIcon icon={faArrowLeft}/>
                </NavItem>
                <NavItem eventKey={2} href="#"className="arrow_move">
                  <FontAwesomeIcon icon={faArrowRight} />
                </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
export default Header