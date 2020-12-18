import { Link } from "react-router-dom";

function Tags({ tags, path }) {
  return (
    <>
      {tags &&
        tags.map((tag) => {
          return (
            <Link
              className="badge badge-info"
              key={tag}
              to={{
                pathname: path,
                search: `tag=${tag}`,
              }}
            >
              {tag}
            </Link>
          );
        })}
    </>
  );
}

export default Tags;
