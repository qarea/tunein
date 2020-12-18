import { useEffect, useState } from "react";

function Search({ setTerm }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setTerm(value);
  }, [value, setTerm]);

  const handleChange = ({ target }) => setValue(target.value);

  return (
    <div className="input-group mb-3 col-md-12">
      <span className="input-group-text" id="searchInput">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="start typing..."
        aria-label="start typing..."
        aria-describedby="searchInput"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
