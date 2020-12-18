import { useEffect, useState } from "react";
import { sortTypes, getDefaultSortBy } from "../../constants/sortByList";

function SortBy({ setFilter }) {
  const [defaultValue] = useState(getDefaultSortBy());
  useEffect(() => {
    setFilter(defaultValue.value);
  }, [setFilter, defaultValue]);
  return (
    <div className="input-group col-md-6 mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="sortBySelect">
          Sort By
        </label>
      </div>
      <select
        className="custom-select"
        id="sortBySelect"
        defaultValue={defaultValue.value}
        onChange={({ target }) => setFilter(target.value)}
      >
        <option value="">Select</option>
        {sortTypes.map((sorter) => {
          return (
            <option value={sorter.value} key={sorter.value}>
              {sorter.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SortBy;
