import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";

import CardStation from "../../components/Card/CardStation";
import StationFilter from "../../components/Filter/StationFilter";

import stationContext from "../../context/StationContext";

import { orderBy } from "../../utils/helper";

function Stations(props) {
  const { tagsList, stationsList } = useContext(stationContext);

  const [stations, setStations] = useState(null);
  const [filter, setFilter] = useState(null);
  const [tag, setTag] = useState(null);
  const [term, setTerm] = useState("");
  const { search: selectedTag } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(selectedTag);
    if (params.has("tag")) {
      setTag(params.get("tag"));
    }
  }, [selectedTag]);

  useEffect(() => {
    setStations(stationsList);
  }, [stationsList, tagsList]);

  useEffect(() => {
    if (filter) {
      const [field, mode] = filter.split("_");
      const sorted = orderBy(stationsList, field, mode);
      setStations(sorted);
    } else {
      setStations(stationsList);
    }
  }, [filter, stationsList]);

  useEffect(() => {
    if (tag) {
      const filtered = _.filter(stationsList, (station) =>
        station.tags.includes(tag)
      );
      setStations(filtered);
    } else {
      setStations(stationsList);
    }
  }, [tag, stationsList]);

  useEffect(() => {
    if (term) {
      const filtered = _.filter(stationsList, (station) =>
        station.name.toLowerCase().includes(term.toLowerCase())
      );

      setStations(filtered);
    } else {
      setStations(stationsList);
    }
  }, [term, stationsList]);

  return (
    <div className="w-100 m-0">
      <div className="col-12">
        <StationFilter
          setFilter={setFilter}
          setTag={setTag}
          tags={tagsList}
          setTerm={setTerm}
        />
      </div>
      <div className="col-12 alert alert-info">
        <h4>Records - {stations && stations.length}</h4>
      </div>
      <div className="row px-3">
        {stations &&
          stations.map((station) => {
            return <CardStation key={station.id} station={station} />;
          })}
      </div>
    </div>
  );
}

export default Stations;
