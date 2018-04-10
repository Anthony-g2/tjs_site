import React, { Component } from "react";
import "./About.css";
import { Row, Col } from "react-bootstrap";
import Main from "./images/Main.jpg";
import Email from "./images/email.png";
import Insta from "./images/insta.png";
import YouTube from "./images/youtube.png";

class About extends Component {
  render(){
    return (
      <div className="about">
        <div className="content">
          <hr className="content-divider"/>
          <h1 className="content-title">Terrell Page</h1>
          <p className= "content-text">
            I am an Actor.<br />
            <span className="aligned-text">Model.<br /></span>
            <span className="aligned-text">Writer.<br /></span>
            <span className="aligned-text">Director.<br /></span>
          </p>
          <hr className="content-divider"/>
          <p className="content-brand">Tej Imaginations</p>
          <Row className="icon-holder">
            <Col xs={4}>
              <a href="https://www.instagram.com/tej_imaginations/">
                <img src={Insta} alt="instagram" title="Instagram" className="icon" />
              </a>
            </Col>
            <Col xs={4}>
              <a href="mailto:t.jamalpage@gmail.com?Subject=Lets%20Work%20Together" target="_top">
                <img src={Email} alt="email" title="Email" className="icon" />
              </a>
            </Col>
            <Col xs={4}>
              <a href="#youtube-coming-soon" disabled>
                <img src={YouTube} alt="Coming Soon" title="Coming Soon" className="icon" />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default About;
