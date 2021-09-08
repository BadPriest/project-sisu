import React from "react";

import { SectionTitle } from "../Shared/SectionTitle";
import { Separator } from "../Shared/Separator";
import { useProjectSavingsData } from "./useProjectSavingsData";

import { SearchProjects } from "./SearchProjects";
import { SortProjects } from "./SortProjects";
import { ListProjects } from "./ListProjects";

import {
  StyledWrapper,
  SectionHeader,
  StyledContentWrapper,
  StyledControlsWrapper,
} from "./styles";

export const ProjectSavings = () => {
  const { projects } = useProjectSavingsData();

  // ? there's got to be a better way ?
  const [filteredProjects, setFilteredProjects] = React.useState();
  const [processedProjects, setProcessedProjects] = React.useState();

  return (
    <StyledWrapper>
      <SectionHeader>
        <SectionTitle>Project Savings Data</SectionTitle>
      </SectionHeader>

      <Separator height="1em" />

      <StyledControlsWrapper>
        {projects && (
          <SearchProjects
            projects={projects}
            updateSearch={setFilteredProjects}
          />
        )}

        {filteredProjects && (
          <SortProjects
            projects={filteredProjects}
            updateSort={setProcessedProjects}
          />
        )}
      </StyledControlsWrapper>

      <Separator height="1em" />

      <StyledContentWrapper>
        <ListProjects projects={processedProjects} />
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ProjectSavings;
