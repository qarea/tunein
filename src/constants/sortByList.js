export const sortTypes = [
  {
    value: "popularity_asc",
    label: "Popularity ASC",
    default: true,
  },
  {
    value: "popularity_desc",
    label: "popularity DESC",
  },
  {
    value: "reliability_asc",
    label: "reliability ASC",
  },
  {
    value: "reliability_desc",
    label: "reliability DESC",
  },
];

export const getDefaultSortBy = () => sortTypes.find((f) => f.default);
