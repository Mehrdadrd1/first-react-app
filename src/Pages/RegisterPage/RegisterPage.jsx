import Layout from "../../Components/Layout/Layout";
import Heading from "../../Components/Heading/Heading";
import RegisterForm from "../../Container/RegisterForm/RegisterForm";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <Layout>
        <Heading as={"h1"}>Register</Heading>
        <hr />
        <RegisterForm />
        <hr />
      </Layout>
    </div>
  );
};

export default RegisterPage;
