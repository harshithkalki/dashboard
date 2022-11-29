import React from "react";

import { Home } from "./components/Home";
import { LoginComp } from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginComp />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
