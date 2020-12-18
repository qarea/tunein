import _ from "lodash";

export const orderBy = (list, field, mode) => _.orderBy(list, [field], [mode]);
export const filterBy = (list, cb) => _.filter(list, cb);
export const getSimilarsBy = (listTo, fieldName, value = []) => {
  return _.filter(listTo, (item) => item[fieldName].includes(...value));
};
