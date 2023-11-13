import ProfulePic from "./Avatar.jpg";
import "./Avatar.css";

const Avatar = () => {
  return (
    <img
      alt="Mehrdad on his wedding day, happy"
      className="rounded-circle profile"
      src={ProfulePic}
    />
  );
};

export default Avatar;
