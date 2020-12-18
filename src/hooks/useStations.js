import Axios from "axios";
import { useEffect, useState } from "react";

function useStations() {
  const [stations, setStations] = useState(null);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await Axios.get("/stations.json");
        const ts = new Set();
        result.data.data.forEach((station) => {
          station.tags.forEach((tag) => ts.add(tag));
        });

        setTags([...ts]);

        setStations(result.data.data);
      } catch (er) {}
    })();
  }, []);

  return [stations, tags];
}

export default useStations;
