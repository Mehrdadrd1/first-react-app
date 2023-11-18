import Layout from "../../Components/Layout/Layout";
import RegisterForm from "../../Container/RegisterForm/RegisterForm";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <Layout>
        <RegisterForm />
      </Layout>
    </div>
  );
};

export default RegisterPage;
