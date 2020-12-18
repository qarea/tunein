import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TagFilter({ tags, setTag }) {
  const { search: selectedTag } = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(selectedTag);
    if (params.has("tag")) {
      setSelected(params.get("tag"));
    } else {
      setSelected("");
    }
  }, [selectedTag]);

  useEffect(() => {
    setTag(selected);
  }, [selected, setTag]);

  return (
    <div className="input-group col-md-6 mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="sortBySelect">
          Select Tag
        </label>
      </div>
      <select
        className="custom-select"
        id="sortBySelect"
        value={selected}
        onChange={({ target }) => setSelected(target.value)}
      >
        <option value="">Select</option>
        {tags &&
          tags.map((tag) => {
            return (
              <option value={tag} key={tag}>
                {tag}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default TagFilter;
