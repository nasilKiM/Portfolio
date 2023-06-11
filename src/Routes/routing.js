import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";

import ErrorPage from "../Error";
import HomePage from "../Pages/Home";
import About from "../Pages/About";
import Skill from "../Pages/Skill";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
