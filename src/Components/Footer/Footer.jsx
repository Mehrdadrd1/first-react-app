import Heading from "../Heading/Heading";
import "./Footer.css";

const Footer = () => {
  const RSymbol = "U+00AE";
  const CSymbol = "U+00Ap";

  return (
    <footer className="Footer">
      <div>
        <Heading as={"h1"}>All Rights Reserved</Heading>
      </div>
    </footer>
  );
};

export default Footer;
