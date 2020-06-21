import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import linkedin from "./images/linkedin_logo.png";
import github from "./images/github_logo.png";

function Footer() {
  return (
    <>
      <div className="footer-gray">
        <ButtonGroup className="footer-button-cont">
          <Button
            color="link"
            style={{
              color: "#4a4a4a",
            }}
          >
            About Me
          </Button>
          <Button
            color="link"
            style={{
              color: "#4a4a4a",
            }}
          >
            My Projects
          </Button>
          <Button
            color="link"
            style={{
              color: "#4a4a4a",
            }}
          >
            Extracurriculars
          </Button>
          <Button
            color="link"
            style={{
              color: "#4a4a4a",
            }}
          >
            Industry Experience
          </Button>
        </ButtonGroup>
        <ButtonGroup className="footer-link-cont">
          <a
            href="https://www.linkedin.com/in/giovana-puccini-52059213b/"
            className="social_logo"
          >
            <img src={linkedin} className="img-fluid" />
          </a>
          <a href="https://github.com/gxp6079" className="social_logo">
            <img src={github} className="img-fluid" />
          </a>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Footer;
