import _ from "lodash";
import React, { useCallback } from "react";
import { normalizeString } from "../../../Utils/parseStrings";
import { Input } from "../Input";

export const useSearch = (collection) => {
  const [query, setQuery] = React.useState("");
  const [filteredCollection, setFilteredCollection] =
    React.useState(collection);

  const handleHasQuery = useCallback(() => {
    const filtered = collection.filter((item) => {
      // Naive implementation...
      // return e.description.includes(query);

      // ...and a much preferred method (searches in all fields)
      const processedItemValues = normalizeString(
        JSON.stringify(Object.values(item))
      );

      return String(processedItemValues).includes(normalizeString(query));
    });

    setFilteredCollection(filtered);
  }, [query, collection]);

  const handleHasNoQuery = useCallback(() => {
    setFilteredCollection(collection);
  }, [collection]);

  React.useEffect(() => {
    if (query && collection) {
      handleHasQuery();
    }

    if (!query) {
      handleHasNoQuery();
    }
  }, [query, collection, handleHasQuery, handleHasNoQuery]);

  const handleQueryChanged = (evt) => setQuery(evt.target.value);

  const inputProps = {
    type: "text",
    name: "search",
    defaultValue: "",
    onChange: _.debounce(handleQueryChanged, 300),
  };

  return { query, Input, inputProps, filteredCollection };
};

export default useSearch;
