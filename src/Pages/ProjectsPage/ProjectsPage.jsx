import Heading from "../../Components/Heading/Heading";
import Layout from "../../Components/Layout/Layout";
import GithubLogo from "../../Components/Footer/github-Logo.png";
import VercelLogo from "../../Components/Footer/vercel-Logo.png";

const ProjectsPage = () => {
  return (
    <div className="ProjectsPage">
      <Layout>
        <Heading as={"h1"}>Check Projects I've Done:</Heading>
        <Heading as={"h3"}>
          You can check on
          <span>
            <a href="https://github.com/Mehrdadrd1">
              {" "}
              <img src={GithubLogo} alt="ME" title="Github" /> Github
            </a>
          </span>{" "}
          <span>
            For Codes and{" "}
            <a href="https://vercel.com/mehrdad-rayatis-projects">
              {" "}
              <img src={VercelLogo} alt="ME" title="Vercel" /> Vercel
            </a>
          </span>{" "}
          for Deployment!
        </Heading>
      </Layout>
    </div>
  );
};

export default ProjectsPage;
