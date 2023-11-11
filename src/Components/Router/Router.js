import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import ContactPage from "../../Pages/ContactPage/ContactPage";

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
  ]);

  return router;
};

export default Pages;
