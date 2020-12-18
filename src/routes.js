import NotFound from "./pages/NotFound/NotFound";
import Stations from "./pages/Stations/Stations";
import Station from "./pages/Stations/Station/Station";

export const routes = [
  {
    path: "/",
    component: Stations,
    exact: true,
  },
  {
    path: "/station/:id",
    component: Station,
  },
  {
    path: "*",
    component: NotFound,
  },
];
