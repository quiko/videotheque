import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startingIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startingIndex)
    .take(pageSize)
    .value();
}
