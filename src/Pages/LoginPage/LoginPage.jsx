import Layout from "../../Components/Layout/Layout";
import RegisterForm from "../../Container/RegisterForm/RegisterForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Layout>
        <h1>Login</h1>
        <hr />
        <RegisterForm />
        <hr />
      </Layout>
    </div>
  );
};

export default LoginPage;
