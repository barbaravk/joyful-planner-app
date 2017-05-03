import App from "../components/App";
import TodoRoute from "./todoRoute";

export const createRoutes = (store) => ({
  path: "/",
  component: App,
  indexRoute: App,
  childRoutes: [
    TodoRoute(store)
  ]
});

export default createRoutes;