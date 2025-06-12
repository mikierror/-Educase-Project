// src/Routing/appRouter.jsx
import { createBrowserRouter } from "react-router-dom";
import LandingScreen from "../Components/LandingScreen";
import LoginScreen from "../Components/LoginScreen";
import Profile from "../Components/Profile";
import SignupPage from "../Components/SignUp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "/Login",
    element: <LoginScreen />,
  },
  {
    path: "/SignUp",
    element: <SignupPage />,
  },
  {
    path: "/Profile/:id",
    element: <Profile />,
  },
]);

export default appRouter;
