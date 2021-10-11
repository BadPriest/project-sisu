import React, { memo } from "react";
import PropTypes from "prop-types";

import { StyledListWrapper } from "./styles";
import { CardProject } from "../CardProject";

export const ListProjects = ({ projects }) => (
  <>
    {projects?.length && (
      <StyledListWrapper>
        {projects.map((p) => (
          <CardProject key={p.reactKeyProp} project={p} />
        ))}
      </StyledListWrapper>
    )}
  </>
);

ListProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape()),
};

ListProjects.defaultProps = {
  projects: [],
};

export default memo(ListProjects);
