import Heading from "../Heading/Heading";
import GithubLogo from "./github-Logo.png";
import LinkedinLogo from "./linkedin-Logo.png";
import StackoverflowLogo from "./stackoverflow-Logo.png";
import TwitterLogo from "./twitter-Logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-left">
        <Heading as={"h6"}>All Rights Reserved</Heading>
        <span>&#174;</span>
      </div>
      <div className="Footer-conectionLinks">
        <p>Find ME on:</p>
        <a href="https://github.com/Mehrdadrd1">
          <img src={GithubLogo} alt="ME" />
        </a>
        <a href="https://www.linkedin.com/in/mehrdadrd/">
          <img src={LinkedinLogo} alt="ME" />
        </a>
        <a href="https://stackoverflow.com/users/22068805/mehrdadr">
          <img src={StackoverflowLogo} alt="ME" />
        </a>
        <a href="https://twitter.com/mehrdad_rd">
          <img src={TwitterLogo} alt="ME" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
