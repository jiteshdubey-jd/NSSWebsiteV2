import React from "react";
import "../styles/developers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Images from "../assets/index";

import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const developersData = [
  {
    name: "Steve Fernandese",
    role: "UI/UX Designer, Frontend Developer",
    image: Images.Steve,
    social: {
      instagram: "https://www.instagram.com/steve_______9856",
      linkedin: "https://www.linkedin.com/in/aspireve",
      github: "https://github.com/aspireve",
    },
  },
  {
    name: "Jitesh Dubey",
    role: "UI/UX Designer, Frontend Developer",
    image: Images.Jitesh,
    social: {
      instagram: "https://instagram.com/jitesh_dubey_jd/",
      linkedin: "https://www.linkedin.com/in/jiteshdubey/",
      github: "https://github.com/jiteshdubey-jd",
    },
  },
  {
    name: "Tanay Agrawal",
    role: "Developer and Coordinator",
    image: Images.tanay,
    social: {
      instagram: "https://www.instagram.com/_tanay_agarwal",
      linkedin: "https://www.linkedin.com/in/tanay-agarval",
      github: "https://github.com/itsTanay",
    },
  },
  {
    name: "Aditi Yadav",
    role: "Frontend Developer",
    image: Images.Aditi,
    social: {
      instagram: "https://www.instagram.com/adiiti._?igsh=MWxwM2g0eWJuYTc5eA==",
      linkedin: "",
      github: "https://github.com/aditiyadav2004",
    },
  },
  {
    name: "Aniket Gupta",
    role: "Frontend Developer",
    image: Images.Aniket,
    social: {
      instagram: "https://www.instagram.com/the_aniketgupta0408",
      linkedin: "https://www.linkedin.com/in/aniket-gupta-94952425",
      github: "https://github.com/Aniket04087021",
    },
  },
  {
    name: "Sumit Tiwari",
    role: "Frontend Developer",
    image: Images.Sumit,
    social: {
      instagram: "https://www.instagram.com/sumitevolv",
      linkedin: "https://www.linkedin.com/in/sumit-tiwari-623b04257/",
      github: "https://github.com/Sumitevolv",
    },
  },
];

const Developers = () => {
  return (
    <div>
      <div className="developer-info">
        <div className="colors">
          <div className="circle"></div>
          <div className="random"></div>
        </div>
        <h1>Meet The Developers</h1>
        <div className="developer-detail-cards">
          {developersData.map((developer, index) => (
            <div className="developer-card" key={index}>
              <div className="img-container">
                <div className="skewed">
                  <div id="img-div">
                    <img src={developer.image} alt={developer.name} />
                  </div>
                </div>
              </div>
              <div className="developers_content">
                <h2>{developer.name}</h2>
                <p>{developer.role}</p>
                <div className="links">
                  <Link
                    className="icon_link"
                    to={developer.social.instagram}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="icons insta"
                    />
                  </Link>
                  <Link
                    className="icon_link"
                    to={developer.social.linkedin}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="icons linked"
                    />
                  </Link>
                  <Link
                    className="icon_link"
                    to={developer.social.github}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} className="icons github" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
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

export default Developers;
