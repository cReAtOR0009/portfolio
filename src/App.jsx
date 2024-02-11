import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromChildren,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layouts from "./components/Layouts/Layout";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";

const App = () => {
  <ToastContainer />
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route  path="projects" element={<Projects />} />
        <Route  path="projects/:projectId" element={<ProjectDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
