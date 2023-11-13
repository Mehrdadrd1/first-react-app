import Heading from "../Heading/Heading";
import NavHeader from "./NavHeader";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Heading as={"h1"}>Front End Developing With "MehrdadR"</Heading>
      <NavHeader />
    </header>
  );
};

export default Header;
