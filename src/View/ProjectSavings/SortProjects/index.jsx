import React from "react";
import PropTypes from "prop-types";

import {
  SORTING_ORDER,
  useSortCollection,
} from "../../Shared/Hooks/useSortCollection";

import { SortingButton } from "../../Shared/SortingButton";
import { Icons } from "../../Shared/Icons";

import { StyledSortControlsWrapper, StyledSortControlWrapper } from "./styles";
import { INITIAL_SORT, SORTING_OPTIONS } from "./constants";

export const SortProjects = ({ projects, updateSort }) => {
  const { sortedCollection, requestSort, sortConfig } = useSortCollection(
    projects,
    INITIAL_SORT
  );

  const isActive = (key) => sortConfig.key === key;

  const renderSortingIcon = () => {
    const direction = sortConfig?.direction || SORTING_ORDER.ASCENDING;

    return (
      <Icons
        padLeft
        icon={
          direction === SORTING_ORDER.ASCENDING
            ? "sort-amount-up"
            : "sort-amount-down-alt"
        }
      />
    );
  };

  const renderSortingButton = (key, label) => {
    const currentlyActive = isActive(key);

    return (
      <StyledSortControlWrapper>
        <SortingButton
          isActive={currentlyActive}
          onClick={() => requestSort(key)}
        >
          {label}
          {currentlyActive && renderSortingIcon(key)}
        </SortingButton>
      </StyledSortControlWrapper>
    );
  };

  React.useEffect(() => {
    updateSort(sortedCollection);
  }, [sortedCollection, sortConfig, updateSort]);

  return (
    <StyledSortControlsWrapper>
      {SORTING_OPTIONS.map((o) => renderSortingButton(o.key, o.label))}
    </StyledSortControlsWrapper>
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
