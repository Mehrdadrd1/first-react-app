import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import CheckBox from "../../Components/CheckBox/CheckBox";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventdefault();
  };

  return (
    <div className="LoginForm">
      <Form handleSubmit={handleSubmit}>
        <Input label="Email" id="email" type="email" placeholder="Email" />
        <Input
          label="Password"
          id="password"
          type="password"
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

export default LoginForm;
