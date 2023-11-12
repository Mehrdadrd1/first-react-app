import "./Input.css";

const Input = ({ label, id, type, placeholder }) => {
  return (
    <div className="Input">
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
export default Input;
