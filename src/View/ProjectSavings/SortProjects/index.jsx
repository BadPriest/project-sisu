import React from "react";
import PropTypes from "prop-types";

import { SortingActionButton } from "../../Shared/SortingActionButton";

import {
  useSortCollection,
  getNewSortableConfig,
  SORTING_ORDER,
} from "../../Shared/Hooks/useSortCollection";

const initialSort = getNewSortableConfig("startDate", SORTING_ORDER.ASCENDING);

export const SortProjects = ({ projects, updateSort }) => {
  const { sortedCollection, requestSort, sortConfig } = useSortCollection(
    projects,
    initialSort
  );

  const renderSortingIcon = (key) => {
    const hadSortedThis = sortConfig?.key === key;
    const direction = sortConfig?.direction || SORTING_ORDER.ASCENDING;

    return <>{`sorting: ${direction} (hadSorted: ${hadSortedThis})`}</>;
  };

  React.useEffect(() => {
    updateSort(sortedCollection);
  }, [sortedCollection, sortConfig, updateSort]);

  return (
    <>
      <SortingActionButton onClick={() => requestSort("startDate")}>
        Sort by Date
      </SortingActionButton>
      <SortingActionButton onClick={() => requestSort("savingsAmount")}>
        Sort by Savings Amount
      </SortingActionButton>
      {renderSortingIcon()}
    </>
  );
};

SortProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape()),
  updateSort: PropTypes.func.isRequired,
};

SortProjects.defaultProps = {
  projects: [],
};

export default SortProjects;
