import * as React from "react";

import { SectionTitle } from "../Shared/SectionTitle";
import { Separator } from "../Shared/Separator";

import { useProjectSavingsData } from "./useProjectSavingsData";
import { ListProjects } from "./ListProjects";

import { StyledWrapper, StyledContentWrapper } from "./styles";

export const ProjectSavings = () => {
  const { projects } = useProjectSavingsData();

  return (
    <StyledWrapper>
      <SectionTitle>Project Savings Data</SectionTitle>
      <Separator />
      <StyledContentWrapper>
        <ListProjects projects={projects} />
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ProjectSavings;
