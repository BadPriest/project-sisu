import React, { useState } from "react";

import { SectionTitle } from "../Shared/SectionTitle";
import { Separator } from "../Shared/Separator";
import { useProjectSavingsData } from "./useProjectSavingsData";
import { FeedbackSearchEmpty } from "../Shared/Feedback/SearchEmpty";
import { FeedbackDataEmptyResponse } from "../Shared/Feedback/DataEmpty";
import { FeedbackDataError } from "../Shared/Feedback/DataError";

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
  const { projects, error, loading } = useProjectSavingsData();

  // ? there's got to be a better way
  const [filteredProjects, setFilteredProjects] = useState();
  const [processedProjects, setProcessedProjects] = useState();

  const hasError = !loading && error;
  const hasProjectsAvailable = projects?.length && !hasError;
  const noProjectsAvailable = !projects?.length && !hasError;
  const searchNoResults = hasProjectsAvailable && !processedProjects?.length;

  const renderContent = () => {
    if (noProjectsAvailable) {
      return <FeedbackDataEmptyResponse />;
    }

    if (hasError) {
      return <FeedbackDataError />;
    }

    if (searchNoResults) {
      return <FeedbackSearchEmpty />;
    }

    return <ListProjects projects={processedProjects} />;
  };

  return (
    <StyledWrapper>
      <SectionHeader>
        <SectionTitle>Project Savings</SectionTitle>
      </SectionHeader>

      <Separator height="2em" />

      <StyledControlsWrapper>
        <SearchProjects
          projects={projects}
          updateSearch={setFilteredProjects}
        />
        <SortProjects
          projects={filteredProjects}
          updateSort={setProcessedProjects}
        />
      </StyledControlsWrapper>

      <Separator height="2.5em" />

      <StyledContentWrapper>{renderContent()} </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ProjectSavings;
