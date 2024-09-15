import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { LoginForm } from "./screen/login/LoginForm";
import "./App.css";
import Home from "./screen/home/Home";

interface AppProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

// Higher-order component to inject props into routed components
const withProps = (
  Component: React.ComponentType<AppProps>,
  props: AppProps
) => {
  return (routeProps: any) => <Component {...props} {...routeProps} />;
};

// Create the hash router instance with your routes
const createRouter = (props: AppProps) =>
  createHashRouter([
    {
      path: "/login",
      element: withProps(LoginForm, props)({}),
    },
    {
      path: "/",
      element: withProps(Home, props)({}),
    },
  ]);

export const App = (props: AppProps) => {
  const router = createRouter(props);

  return <RouterProvider router={router} />;
};
