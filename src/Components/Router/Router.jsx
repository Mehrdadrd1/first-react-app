import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
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
