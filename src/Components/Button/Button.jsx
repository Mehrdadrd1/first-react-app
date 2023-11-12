import "./Button.css";

const Button = ({ type, id, disabled, children }) => {
  return (
    <button className="Button" type={type} id={id} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
