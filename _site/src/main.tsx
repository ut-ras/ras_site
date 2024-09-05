import "@/css/index.css";

import ReactDOM from "react-dom/client";
import HomePage from "@/components/pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
