import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import CheckBox from "../../Components/CheckBox/CheckBox";
import Heading from "../../Components/Heading/Heading";

const RegisterForm = () => {
  return (
    <div className="RegisterForm">
      <Heading as={"h1"}></Heading>
      <Form>
        <Input label="Name" id="name" type="name" placeholder="Name" />
        <Input label="Email" id="email" type="email" placeholder="Email" />
        <Input
          label="Password"
          id="password"
          type="p assword"
          placeholder="Password"
        />
        <Input
          label="confirm Password"
          id="confirmPassword"
          type="confirmPassword"
          placeholder="confirmation Password"
        />
        <CheckBox>Remember ME</CheckBox>
        <Button type="submit" id="submit">
          Register ME
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
