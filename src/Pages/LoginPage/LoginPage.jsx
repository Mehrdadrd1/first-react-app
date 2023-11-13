import Layout from "../../Components/Layout/Layout";
import Heading from "../../Components/Heading/Heading";
import LoginForm from "../../Container/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Layout>
        <Heading as={"h1"}>Log in</Heading>
        <div>
          <LoginForm />
        </div>
      </Layout>
    </div>
  );
};

export default LoginPage;
