import { RouteObject, useRoutes } from "react-router-dom";
import Dashboard from "../DashBoard";
import DefaultLayout from "../Layout";
import Settings from "../Settings";
import UserManager from "../UserManager";

const routers: RouteObject[] = [
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    ),
  },
  {
    path: "/usermanager",
    element: (
      <DefaultLayout>
        <UserManager />
      </DefaultLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <DefaultLayout>
        <Settings />
      </DefaultLayout>
    ),
  },
];

const Routers = () => {
  const router = useRoutes(routers);
  return router;
};

export default Routers;
