import React from "react";
import PropTypes from "prop-types";

import { StyledListWrapper, StyledCard } from "./styles";
import { Text } from "../../Shared/Text";

export const ListProjects = ({ projects }) => (
  <StyledListWrapper>
    {projects.map((p) => (
      <StyledCard key={p.reactKeyProp}>
        <Text>project: {p.project}</Text>
        <Text>description {p.description}</Text>
        <Text>start date{p.normalized.startDate}</Text>
        <Text>category {p.category}</Text>
        <Text>responsible {p.responsible}</Text>
        <Text>savings amount{p.savingsAmount}</Text>
        <Text>currency {p.currency}</Text>
        <Text>complexity {p.complexity}</Text>
      </StyledCard>
    ))}
  </StyledListWrapper>
);

ListProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape()),
};

ListProjects.defaultProps = {
  projects: [],
};

export default React.memo(ListProjects);
