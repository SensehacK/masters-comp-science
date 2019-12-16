import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <span>Copyright © Kautilya Save.</span>
        <p>
          <a
            href="https://sensehack.github.io/"
            title="Sensehack"
            target="_blank"
          >
            <FontAwesomeIcon icon={faUserCircle} />
            Kautilya Save.
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
