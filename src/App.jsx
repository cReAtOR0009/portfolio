import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromChildren,
} from "react-router-dom";
import Layouts from "./components/Layouts/Layout";
import Home from "./components/Pages/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
