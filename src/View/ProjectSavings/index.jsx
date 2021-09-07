import * as React from "react";

import { SectionTitle } from "../Shared/SectionTitle";
import { Separator } from "../Shared/Separator";

import { useProjectSavingsData } from "./useProjectSavingsData";

import { SearchProjects } from "./SearchProjects";
import { SortProjects } from "./SortProjects";
import { ListProjects } from "./ListProjects";

import { StyledWrapper, SectionHeader, StyledContentWrapper } from "./styles";

export const ProjectSavings = () => {
  const { projects } = useProjectSavingsData();

  // ? there's got to be a better way ?
  const [filteredProjects, setFilteredProjects] = React.useState();
  const [processedProjects, setProcessedProjects] = React.useState();

  return (
    <StyledWrapper>
      <SectionHeader>
        <SectionTitle>Project Savings Data</SectionTitle>
        {projects && (
          <SearchProjects
            projects={projects}
            updateSearch={setFilteredProjects}
          />
        )}
      </SectionHeader>
      <Separator height="2em" />
      {filteredProjects && (
        <SortProjects
          projects={filteredProjects}
          updateSort={setProcessedProjects}
        />
      )}
      <StyledContentWrapper>
        <ListProjects projects={processedProjects} />
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ProjectSavings;
