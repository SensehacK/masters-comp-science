import React, { Component } from "react";

// Font Awesome
// get fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faSpotify,
  faXbox,
  faLastfm
} from "@fortawesome/free-brands-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";

class Social extends Component {
  state = {};
  render() {
    return (
      <div className="social">
        <ul className="banner">
          <li>
            <a
              href="https://github.com/SensehacK"
              title="Github"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/kautilyasave/"
              title="LinkedinIn"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sensehack/"
              title="LinkedinIn"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.trueachievements.com/gamer/Sensehack/gamecollection"
              title="Xbox"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXbox} />
            </a>
          </li>
          <li>
            <a
              href="https://trakt.tv/user/SensehacK"
              title="Trakt TV"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTv} />
            </a>
          </li>
          <li>
            <a
              href="https://www.last.fm/user/Sensehack"
              title="Last FM"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLastfm} />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/user/sensehack"
              title="Spotify"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
