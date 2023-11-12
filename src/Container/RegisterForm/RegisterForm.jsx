import Button from "../../Components/Button/Button";
import Heading from "../../Components/Heading/Heading";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import CheckBox from "../../Components/CheckBox/CheckBox";

const RegisterForm = () => {
  return (
    <div className="RegisterForm">
      <Heading as={"h1"}>Form</Heading>
      <Form>
        <Input label="Name" id="name" type="name" placeholder="Name" />
        <Input label="Email" id="email" type="email" placeholder="Email" />
        <Input
          label="Password"
          id="password"
          type="p assword"
          placeholder="Password"
        />
        <CheckBox>Remember ME</CheckBox>
        <Button type="submit" id="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
