import React from "react";
import PropTypes from "prop-types";

import { useSearchCollection } from "../../Shared/Hooks/useSearchCollection";
import { Input as SearchInput } from "../../Shared/Input";
import { filterCollection as filterFlattenCollection } from "../../Shared/Utils/filterFlattenCollection";

export const SearchProjects = ({ projects, updateSearch }) => {
  const { setQuery, filteredCollection } = useSearchCollection(
    projects,
    filterFlattenCollection
  );

  React.useEffect(() => {
    updateSearch(filteredCollection);
  }, [filteredCollection, setQuery]);

  return (
    <>
      <SearchInput type="text" name="inputSearch" onChange={setQuery} />
    </>
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
