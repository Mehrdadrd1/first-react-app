import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import ProjectsPage from "../../Pages/ProjectsPage/ProjectsPage";

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AboutPage />,
    },
    {
      path: "/project",
      element: <ProjectsPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/registration",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return router;
};

export default Pages;
