import Heading from "../Heading/Heading";
import GithubLogo from "./github-Logo.png";
import VercelLogo from "./vercel-Logo.png";
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
          <img src={GithubLogo} alt="ME" title="Github" />
        </a>
        <a href="https://vercel.com/mehrdad-rayatis-projects">
          <img src={VercelLogo} alt="ME" title="vercel" />
        </a>
        <a href="https://www.linkedin.com/in/mehrdadrd/">
          <img src={LinkedinLogo} alt="ME" title="Linkedin" />
        </a>
        <a href="https://stackoverflow.com/users/22068805/mehrdadr">
          <img src={StackoverflowLogo} alt="ME" title="stackover" />
        </a>
        <a href="https://twitter.com/mehrdad_rd">
          <img src={TwitterLogo} alt="ME" title="twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
