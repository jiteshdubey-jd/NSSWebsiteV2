import React from "react";
import "../styles/developers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Images from "../assets/index";

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const developers = () => {
  console.log(window.innerWidth);
  console.log(window.outerWidth);
  return (
    <div>
      <div class="developer-info">
        <div class="colors">
          <div class="circle"></div>
          <div class="random"></div>
        </div>
        <h1>Meet The Developers</h1>
        <div class="developer-detail-cards">
          <div class="developer-card">
            <div class="img-container">
              <div class="skewed">
                <div id="img-div">
                  <img src={Images.Steve} alt="" />
                </div>
              </div>
            </div>
            <div class="developers_content">
              <h2>Steve Fernandese</h2>
              <p>
                UI/UX Designer <br />
                Frontend Developer
              </p>
              <div class="links">
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faInstagram} className="icons insta" />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faLinkedin} className="icons linked" />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faGithub} className="icons github" />
                </Link>
              </div>
            </div>
          </div>
          <div class="developer-card">
            <div class="img-container">
              <div class="skewed">
                <div id="img-div">
                  <img src={Images.Jitesh} alt="" />
                </div>
              </div>
            </div>
            <div class="developers_content">
              <h2>Jitesh Dubey</h2>
              <p>
                UI/UX Designer <br />
                Frontend Developer
              </p>
              <div class="links">
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faInstagram} className="icons insta" />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="icons linked"
                  />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faGithub} className="icons github" />
                </Link>
              </div>
            </div>
          </div>
          <div class="developer-card">
            <div class="img-container">
              <div class="skewed">
                <div id="img-div">
                  <img src={Images.tanay} alt="" />
                </div>
              </div>
            </div>
            <div class="developers_content">
              <h2>Tanay Agrawal</h2>
              <p>Developer and Coordinator</p>
              <div class="links">
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faInstagram} className="icons insta" />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="icons linked"
                  />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faGithub} className="icons github" />
                </Link>
              </div>
            </div>
          </div>
          <div class="developer-card">
            <div class="img-container">
              <div class="skewed">
                <div id="img-div">
                  <img src={Images.Aditi} alt="" />
                </div>
              </div>
            </div>
            <div class="developers_content">
              <h2>Aditi Yadav</h2>
              <p>
                UI/UX Designer <br />
                Frontend Developer
              </p>
              <div class="links">
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faInstagram} className="icons insta" />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="icons linked"
                  />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faGithub} className="icons github" />
                </Link>
              </div>
            </div>
          </div>
          <div class="developer-card">
            <div class="img-container">
              <div class="skewed">
                <div id="img-div">
                  <img src={Images.Aniket} alt="" />
                </div>
              </div>
            </div>
            <div class="developers_content">
              <h2>Aniket Gupta</h2>
              <p>
                UI/UX Designer <br />
                Frontend Developer
              </p>
              <div class="links">
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faInstagram} className="icons insta" />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="icons linked"
                  />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faGithub} className="icons github" />
                </Link>
              </div>
            </div>
          </div>
          <div class="developer-card">
            <div class="img-container">
              <div class="skewed">
                <div id="img-div">
                  <img src={Images.Sumit} alt="" />
                </div>
              </div>
            </div>
            <div class="developers_content">
              <h2>Sumit Tiwari</h2>
              <p>
                UI/UX Designer <br />
                Frontend Developer
              </p>
              <div class="links">
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faInstagram} className="icons insta" />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="icons linked"
                  />
                </Link>
                <Link className="icon_link">
                  <FontAwesomeIcon icon={faGithub} className="icons github" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-div">
          <hr />
          <div className="legal-links">
            <h2>© TCET-NSS. All rights reserved</h2>
            <ul>
              <li>Meet the Developers</li>
            </ul>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default developers;
