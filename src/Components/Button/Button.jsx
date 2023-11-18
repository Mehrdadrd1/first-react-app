import "./Button.css";

const Button = ({ type, id, disabled, children, handleClick }) => {
  return (
    <button
      className="Button"
      onClick={handleClick}
      type={type}
      id={id}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
