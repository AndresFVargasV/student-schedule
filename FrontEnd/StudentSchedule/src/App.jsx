import "./assets/css/App.css";

import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import AboutPage from "./pages/AboutPage";
import PlanPage from "./pages/PlanPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        //path: "/", another way to write it
        index: true,
        element: <HomePage />,
      },

      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/Plan",
        element: <PlanPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
