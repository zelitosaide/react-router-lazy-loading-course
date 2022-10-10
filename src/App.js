import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Home } from "./Home";
import { Layout } from "./Layout";
import { NoMatch } from "./NoMatch";

const About = React.lazy(function () {
  return import("./About");
});

const Dashboard = React.lazy(function () {
  return import("./Dashboard");
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: (
          <React.Suspense fallback={<>....</>}>
            <About />
          </React.Suspense>
        )
      },
      {
        path: "dashboard/*",
        element: (
          <React.Suspense fallback={<>....</>}>
            <Dashboard />
          </React.Suspense>
        )
      },
      {
        path: "*",
        element: <NoMatch />
      }
    ]
  }
]);

export function App() {
  return (
    <div>
      <h1>Lazy loading Example</h1>
      <RouterProvider router={router} />
    </div>
  );
}