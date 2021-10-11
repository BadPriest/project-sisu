import React, { useEffect } from "react";

import PropTypes from "prop-types";

import {
  SORTING_ORDER,
  useSortCollection,
} from "../../Shared/Hooks/useSortCollection";

import { SortingButton } from "../../Shared/SortingButton";
import { Icons } from "../../Shared/Icons";

import { INITIAL_SORT, SORTING_OPTIONS } from "./constants";
import {
  StyledSortControlsWrapper,
  StyledSortControlWrapper,
  StyledOptionsWrapper,
  StyledLabel,
} from "./styles";

export const SortProjects = ({ projects, updateSort }) => {
  const { sortedCollection, requestSort, sortConfig } = useSortCollection(
    projects,
    INITIAL_SORT
  );

  const isActive = (key) => sortConfig.key === key;

  const renderSortingIcon = (currentlyActive) => {
    const directionIcon =
      (sortConfig?.direction || SORTING_ORDER.ASCENDING) ===
      SORTING_ORDER.ASCENDING
        ? "caret-up"
        : "caret-down";

    let icon = <Icons padLeft icon="sort" size="lg" />;

    if (currentlyActive) {
      icon = <Icons padLeft size="lg" icon={directionIcon} />;
    }

    return icon;
  };

  const renderSortingButton = (key, label) => {
    const currentlyActive = isActive(key);

    return (
      <StyledSortControlWrapper key={key}>
        <SortingButton
          disabled={!projects?.length}
          isActive={currentlyActive}
          onClick={() => requestSort(key)}
        >
          {label}
          {renderSortingIcon(currentlyActive)}
        </SortingButton>
      </StyledSortControlWrapper>
    );
  };

  useEffect(() => {
    updateSort(sortedCollection);
  }, [sortedCollection, sortConfig, updateSort]);

  return (
    <StyledSortControlsWrapper>
      <StyledLabel>Sort by</StyledLabel>
      <StyledOptionsWrapper>
        {SORTING_OPTIONS.map((o) => renderSortingButton(o.key, o.label))}
      </StyledOptionsWrapper>
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
