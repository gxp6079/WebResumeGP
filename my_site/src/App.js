import React from "react";
import logo from "./images/ProfilePic.jpeg";
import "./App.css";
import { Container, Row } from "reactstrap";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Container className="App-header container-fluid" fluid>
        <h1 className="header-text">Giovana Puccini</h1>
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </Container>
      <p className="intro-text">
        Hi, I am Giovana! <br />
        I am a 4th year CS student at RIT from Joinville - Brazil. <br /> My
        biggest tech-passion is Educational Technologies. <br />I worked as an
        Android developer for Wegmans Meals2Go and currently work as a software
        engineer intern at Athenahealth. <br /> My hobbies are a big part of my
        college life, as I was able to create the RIT Handball Club and the
        BRASA@RIT
      </p>

      <Footer />
    </div>
  );
}

export default App;
