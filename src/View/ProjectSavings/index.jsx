import * as React from "react";

import { SectionTitle } from "../Shared/SectionTitle";
import { Separator } from "../Shared/Separator";

import { useSearchCollection } from "../Shared/Hooks/useSearchCollection";

import { useProjectSavingsData } from "./useProjectSavingsData";
import { filterCollection as filterFlattenCollection } from "../Shared/Utils/filterFlattenCollection";

import { Input as SearchInput } from "../Shared/Input";

import { SortProjects } from "./SortProjects";
import { ListProjects } from "./ListProjects";

import { StyledWrapper, SectionHeader, StyledContentWrapper } from "./styles";

export const ProjectSavings = () => {
  const [processedProjects, setProcessedProjects] = React.useState();

  const { projects } = useProjectSavingsData();
  const { setQuery, filteredCollection } = useSearchCollection(
    projects,
    filterFlattenCollection
  );

  return (
    <StyledWrapper>
      <SectionHeader>
        <SectionTitle>Project Savings Data</SectionTitle>
        <SearchInput type="text" name="inputSearch" onChange={setQuery} />
      </SectionHeader>
      <Separator height="2em" />
      {filteredCollection && (
        <SortProjects
          projects={filteredCollection}
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
