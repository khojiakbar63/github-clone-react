import { createBrowserRouter } from "react-router-dom";
import { Profile, AuthLayout } from "../layouts";
import { Home, Overview, Repositories, Projects, Packages, Stars, Followers, Followings, Error } from "../pages";

const router = [
  {
    path: "/",
    element: <Profile />,
    children: [
      { path: "/", element: <Home /> },
      { path: "overview", element: <Overview /> },
      { path: "repositories", element: <Repositories /> },
      { path: "projects", element: <Projects /> },
      { path: "packages", element: <Packages /> },
      { path: "stars", element: <Stars /> },
      { path: "followers", element: <Followers /> },
      { path: "followings", element: <Followings /> },
      { path: "/*", element: <Error /> },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
  {
    path: "/login",
    element: <AuthLayout />,
  },
];


export const AppRouter = createBrowserRouter(router)
