import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './Navbar.css'

class Navbar extends Component {
  render(){
    return (
      <div className="navbar">
        <ul className="navlist">
          <li><a href="#about">about</a></li>
          <li><a href="#gallery">gallery</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
