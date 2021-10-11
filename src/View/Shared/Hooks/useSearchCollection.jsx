import { useCallback, useEffect, useState } from "react";

import _ from "lodash";

export const useSearchCollection = (collection, collectionProcessor) => {
  const [query, setQuery] = useState("");
  const [filteredCollection, setFilteredCollection] = useState(collection);

  const handleHasQuery = useCallback(() => {
    setFilteredCollection(collectionProcessor(collection, query));
  }, [query, collection]);

  const handleHasNoQuery = useCallback(() => {
    setFilteredCollection(collection);
  }, [collection]);

  useEffect(() => {
    if (query && collection) {
      handleHasQuery();
    }

    if (!query) {
      handleHasNoQuery();
    }
  }, [query, collection, handleHasQuery, handleHasNoQuery]);

  const handleQueryChanged = (evt) => setQuery(evt.target.value);

  return {
    query,
    setQuery: _.debounce(handleQueryChanged, 400),
    filteredCollection,
  };
};

export default useSearchCollection;
