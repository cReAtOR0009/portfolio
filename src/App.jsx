import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromChildren,
} from "react-router-dom";
import Layouts from "./components/Layouts/Layout";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";

const App = () => {
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
