import * as React from "react";

import { SectionTitle } from "../Shared/SectionTitle";
import { Separator } from "../Shared/Separator";

import { useSearch } from "../Shared/Hooks/useSearch";
import { useProjectSavingsData } from "./useProjectSavingsData";

import { ListProjects } from "./ListProjects";

import { StyledWrapper, SectionHeader, StyledContentWrapper } from "./styles";

export const ProjectSavings = () => {
  const { projects } = useProjectSavingsData();
  const { Input, inputProps, filteredCollection } = useSearch(projects);

  return (
    <StyledWrapper>
      <SectionHeader>
        <SectionTitle>Project Savings Data</SectionTitle>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Input {...inputProps} />
      </SectionHeader>
      <Separator height="3em" />
      <StyledContentWrapper>
        <ListProjects projects={filteredCollection} />
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ProjectSavings;
