import React from "react";
import { Button, ButtonGroup } from "reactstrap";

function Footer() {
  return (
    <>
      <footer className="footer-gray">
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
      </footer>
    </>
  );
}

export default Footer;
