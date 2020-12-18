import { Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import stationContext from "./context/StationContext";

import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
import useStations from "./hooks/useStations";
import { routes } from "./routes";
import "./App.css";

function App() {
  const [stationsList, tagsList] = useStations();

  return (
    <div className="container p-5">
      <Nav />
      <stationContext.Provider
        value={{
          stationsList,
          tagsList,
        }}
      >
        <Switch>
          {routes.map((route) => {
            return <RouteWithSubRoutes {...route} key={route.path} />;
          })}
        </Switch>
      </stationContext.Provider>
    </div>
  );
}

export default App;
