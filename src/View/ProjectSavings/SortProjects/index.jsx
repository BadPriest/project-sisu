import React from "react";
import PropTypes from "prop-types";

import { SortingButton } from "../../Shared/SortingButton";

import {
  useSortCollection,
  getNewSortableConfig,
  SORTING_ORDER,
} from "../../Shared/Hooks/useSortCollection";

import { StyledWrapper } from "./styles";

const initialSort = getNewSortableConfig("startDate", SORTING_ORDER.ASCENDING);

export const SortProjects = ({ projects, updateSort }) => {
  const { sortedCollection, requestSort, sortConfig } = useSortCollection(
    projects,
    initialSort
  );

  const renderSortingIcon = (key) => {
    const hadSortedThis = sortConfig?.key === key;
    const direction = sortConfig?.direction || SORTING_ORDER.ASCENDING;

    return <>{`sorting: ${direction} (${hadSortedThis})`}</>;
  };

  React.useEffect(() => {
    updateSort(sortedCollection);
  }, [sortedCollection, sortConfig, updateSort]);

  return (
    <StyledWrapper>
      <SortingButton onClick={() => requestSort("startDate")}>
        Sort by Date
      </SortingButton>
      <SortingButton onClick={() => requestSort("savingsAmount")}>
        Sort by Savings Amount
      </SortingButton>
      {renderSortingIcon()}
    </StyledWrapper>
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
