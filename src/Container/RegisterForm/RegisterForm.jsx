import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import CheckBox from "../../Components/CheckBox/CheckBox";
import Heading from "../../Components/Heading/Heading";
import "./RegisterForm.css";

const RegisterForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3030/users", {
      method: "POST",
      headers: { "": "" },
      body: JSON.stringify({
        first_name: event.target[0].value,
        last_name: event.target[1].value,
        username: event.target[2].value,
        email: event.target[3].value,
        avatar: "",
        password: event.target[4].value,
        rememberME: event.target[6].checked,
      }),
    });
  };

  return (
    <div className="RegisterForm">
      <Heading as={"h1"}></Heading>
      <Form handleSubmit={handleSubmit}>
        <div className="fullname">
          <Input
            label="First Name"
            id="firstName"
            type="firstName"
            placeholder="First Name"
          />
          <Input
            label="Last Name"
            id="lastName"
            type="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="username">
          <Input
            label="User Name"
            id="userName"
            type="userName"
            placeholder="User Name"
          />
          <Input label="Email" id="username" type="email" placeholder="Email" />
        </div>
        <div className="password">
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
          />
          <Input
            label="confirm Password"
            id="confirmPassword"
            type="password"
            placeholder="confirmation Password"
          />
        </div>
        <div className="submitPart">
          <CheckBox>Remember ME</CheckBox>
          <Button type="submit" id="submit">
            Register ME
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
