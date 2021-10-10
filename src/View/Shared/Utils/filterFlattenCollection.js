import { normalizeString } from "../../../Utils/parseStrings";

export const getFlatValues = (item) =>
  normalizeString(JSON.stringify(Object.values(item)));

export const filterCollection = (collection, query) =>
  collection.filter((i) =>
    getFlatValues(i).includes(normalizeString(String(query)))
  );

export default filterCollection;
