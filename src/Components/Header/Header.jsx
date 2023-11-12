import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="hiro">
        <h1>HEADER</h1>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
      </div>
      <nav className="nav">
        <div className="pages-card">
          <ul>
            <li>
              <Link to={`/`}>HomePage</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="user-card">
          <ul>
            <li>
              <Link to={`/login`}>Log in</Link>
            </li>
            <li>
              <Link to={`/registration`}>Register</Link>
            </li>
            <li>
              <Link>Card</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
