import "@/css/index.css";

import ReactDOM from "react-dom/client";
import HomePage from "@/components/pages/HomePage";
import { RouterProvider, createBrowserRouter, useNavigate, useParams } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import ErrorPage from "@/components/pages/ErrorPage";
import About from "@/components/pages/AboutPage";
import Calendar from "@/components/pages/CalendarPage";
import Join from "@/components/pages/JoinPage";
import Committees from "./components/pages/CommitteesPage";
import Media from "./components/pages/MediaPage";
import Blog from "./components/pages/BlogPage";
import Leadership from "./components/pages/LeadershipPage";
import Supporters from "./components/pages/SupportersPage";
import Resources from "./components/pages/ResourcesPage";

import CorporateFundraising from "@/components/pages/committees/CorporateFundraising";
import Demobots from "@/components/pages/committees/Demobots";
import IGVC from "@/components/pages/committees/IGVC";
import Robomaster from "@/components/pages/committees/Robomaster";
import Robotathon from "@/components/pages/committees/Robotathon";
import VexU from "@/components/pages/committees/VexU";
import { useEffect } from "react";


const HtmlPageHandler = () => {
  const { pageName, committeeName } = useParams();
  const navigate = useNavigate();

  // Use an effect to navigate to the correct path without ".html"
  useEffect(() => {
    if (committeeName) {
      navigate(`/committees/${committeeName}`, { replace: true });
    } else {
      navigate(`/${pageName}`, { replace: true });
    }
  }, [pageName, navigate]);

  return null; // Render nothing since we're redirecting
};

// TODO where do i put utilities
const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/committees",
        element: <Committees />,
      },
      {
        path: "/committees/corporate-fundraising",
        element: <CorporateFundraising />,
      },
      {
        path: "/committees/demobots",
        element: <Demobots />,
      },
      {
        path: "/committees/igvc",
        element: <IGVC />,
      },
      {
        path: "/committees/robomaster",
        element: <Robomaster />,
      },
      {
        path: "/committees/robotathon",
        element: <Robotathon />,
      },
      {
        path: "/committees/vexu",
        element: <VexU />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/supporters",
        element: <Supporters />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      // Catch-all for .html routes and map to HtmlPageHandler
      {
        path: ":pageName.html",
        element: <HtmlPageHandler />,
      },
      {
        path: "/committees/:committeeName.html",
        element: <HtmlPageHandler />,
      },
      // because router v6 doesn't support regex, this makes individual routes for every post from 2015 to now (only tested in 2024 as of writing this)
    ].concat(range(2015, new Date().getFullYear()).map((i) => ({ path: `/${i}/*`, element: <Blog year={i} /> }))),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
