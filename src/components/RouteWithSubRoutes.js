import { Route } from "react-router-dom";

export default function RouteWithSubRoutes(route) {
  return (
    <Route path={route.path} exact={route.exact}>
      {<route.component routes={route.routes} />}
    </Route>
  );
}
