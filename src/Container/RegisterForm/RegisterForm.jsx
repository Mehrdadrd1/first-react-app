import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import CheckBox from "../../Components/CheckBox/CheckBox";
import Heading from "../../Components/Heading/Heading";
import "./RegisterForm.css";
import postData from "../../api/postData";

const RegisterForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      rememberME: event.target[4].checked,
    };
    postData(data);
  };

  return (
    <div className="RegisterForm">
      <Heading as={"h1"}></Heading>
      <Form handleSubmit={handleSubmit}>
        <div className="form-control">
          <Input
            label="User Name"
            id="userName"
            type="userName"
            placeholder="User Name"
          />
        </div>
        <div className="form-control">
          <Input label="Email" id="username" type="email" placeholder="Email" />
        </div>
        <div className="form-control">
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-control">
          <Input
            label="confirm Password"
            id="Password2"
            type="password"
            placeholder="confirmation Password"
          />
        </div>
        <div className="form-control">
          <CheckBox>Remember ME</CheckBox>
        </div>
        <Button type="submit" id="submit">
          Register ME
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
