import { Link } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="Header">
      <h2>HEADER</h2>
      <nav>
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
        <Button>LOGIN</Button>
        <Button>REGISTER</Button>
      </nav>
    </header>
  );
};

export default Header;
