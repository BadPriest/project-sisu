import _ from "lodash";
import React, { useCallback } from "react";
// import { normalizeString } from "../../../Utils/parseStrings";
import { Input } from "../Input";

export const useProcessCollection = (options) => {
  const { collection, filterCollection } = options;

  const [query, setQuery] = React.useState("");
  const [filteredCollection, setFilteredCollection] =
    React.useState(collection);

  const handleHasQuery = useCallback(() => {
    setFilteredCollection(filterCollection(collection, query));
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

export default useProcessCollection;
