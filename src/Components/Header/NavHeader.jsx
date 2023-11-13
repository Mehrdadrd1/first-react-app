import { Link } from "react-router-dom";
import "./NavHeader.css";

const NavHeader = () => {
  return (
    <header>
      <nav className="stickyNav">
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

export default NavHeader;
