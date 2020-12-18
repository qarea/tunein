import PropTypes from "prop-types";
import Search from "./Search";
import SortBy from "./SortBy";
import TagFilter from "./TagFilter";

function StationFilter({ setFilter, setTag, tags, setTerm }) {
  return (
    <div className="filters row">
      <Search setTerm={setTerm} />
      <SortBy setFilter={setFilter} />
      <TagFilter tags={tags} setTag={setTag} />
    </div>
  );
}

StationFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  setTag: PropTypes.func.isRequired,
  setTerm: PropTypes.func.isRequired,
  tags: PropTypes.array,
};

export default StationFilter;
