import React from "react";
import PropTypes from "prop-types";

import { useSearchCollection } from "../../Shared/Hooks/useSearchCollection";
import { filterCollection as filterFlattenCollection } from "../../Shared/Utils/filterFlattenCollection";
import { InputSearch } from "../../Shared/InputSearch";

export const SearchProjects = ({ projects, updateSearch }) => {
  const { setQuery, filteredCollection } = useSearchCollection(
    projects,
    filterFlattenCollection
  );

  React.useEffect(() => {
    updateSearch(filteredCollection);
  }, [filteredCollection, setQuery]);

  return (
    <InputSearch
      autoFocus
      id="inputSearch"
      name="inputSearch"
      label="Search"
      placeholder="Try 'creme fraiche' or 'office supplies'"
      setQuery={setQuery}
    />
  );
};

SearchProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape()),
  updateSearch: PropTypes.func.isRequired,
};

SearchProjects.defaultProps = {
  projects: [],
};

export default SearchProjects;
