import React, { useCallback } from "react";

export const useSearchCollection = (collection, collectionProcessor) => {
  const [query, setQuery] = React.useState("");
  const [filteredCollection, setFilteredCollection] =
    React.useState(collection);

  const handleHasQuery = useCallback(() => {
    setFilteredCollection(collectionProcessor(collection, query));
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

  return {
    query,
    setQuery: handleQueryChanged,
    filteredCollection,
  };
};

export default useSearchCollection;
