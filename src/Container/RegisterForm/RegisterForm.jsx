import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import CheckBox from "../../Components/CheckBox/CheckBox";
import Heading from "../../Components/Heading/Heading";
import "./RegisterForm.css";
const RegisterForm = () => {
  return (
    <div className="RegisterForm">
      <Heading as={"h1"}></Heading>
      <Form>
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
            type="confirmPassword"
            placeholder="confirmation Password"
          />
        </div>
        <div className="submitPart">
          <Button type="submit" id="submit">
            Register ME
          </Button>
          <CheckBox>Remember ME</CheckBox>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
