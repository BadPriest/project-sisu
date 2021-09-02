import { normalizeString } from "../../../Utils/parseStrings";

const getFlatValues = (item) =>
  normalizeString(JSON.stringify(Object.values(item)));

export const filterCollection = (collection, query) =>
  collection.filter((i) => getFlatValues(i).includes(normalizeString(query)));

export default filterCollection;
