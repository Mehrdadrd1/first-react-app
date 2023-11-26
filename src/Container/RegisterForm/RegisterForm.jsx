import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import CheckBox from "../../Components/CheckBox/CheckBox";
import Heading from "../../Components/Heading/Heading";
import "./RegisterForm.css";
import { useState } from "react";
import postData from "../../api/postData";

const RegisterForm = () => {
  const [responseFromApi, setResponseFromApi] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let id;
    const data = {
      id: id,
      username: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      rememer: event.target[4].checked,
    };

    const response = postData(data, id);
    console.log("Response", response);
  };

  Form.Input = false;

  return (
    <div className="RegisterForm">
      <Heading as={"h1"}>Register Page</Heading>

      <Form handleSubmit={handleSubmit}>
        <Input
          label="User Name"
          id="userName"
          type="userName"
          placeholder="User Name"
        />
        <Input label="Email" id="email" type="email" placeholder="Email" />

        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
        />
        <Input
          label="confirm Password"
          id="Password2"
          type="password"
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
