import { createBrowserRouter } from "react-router-dom";
import { Profile, AuthLayout } from "../layouts";
import { Home, Error } from "../pages";

const router = [
  {
    path: "/",
    element: <Profile />,
    children: [
      { path: "/", element: <Home /> },
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
