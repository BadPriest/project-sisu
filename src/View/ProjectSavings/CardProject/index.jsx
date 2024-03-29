import React from "react";
import { PropTypes } from "prop-types";

import { normalizeString } from "../../../Utils/parseStrings";
import { formatCurrency } from "../../../Utils/parseCurrency";

import { Icons } from "../../Shared/Icons";
import { Separator } from "../../Shared/Separator";
import { DisplayInfo } from "../../Shared/DisplayInfo";
import { DisplayInfoHero } from "../../Shared/DisplayInfoHero";
import { TextHero } from "../../Shared/TextHero";

import {
  StyledCardHeader,
  StyledAside,
  StyledContent,
  StyledProjectCard,
  StyledIconInfoWrapper,
} from "./styles";

export const CardProject = ({ project }) => (
  <StyledProjectCard key={project.reactKeyProp}>
    <StyledAside complexity={normalizeString(project.complexity)}>
      <StyledCardHeader align="right">
        <DisplayInfoHero label="project" value={project.project} />
      </StyledCardHeader>
      <Separator height="1em" />
      <DisplayInfo label="start date" value={project.normalized.startDate} />
      <DisplayInfo label="currency" value={project.currency} />
    </StyledAside>
    <StyledContent>
      <StyledCardHeader>
        <StyledIconInfoWrapper title={`Responsible: "${project.responsible}"`}>
          <TextHero small>
            <Icons padRight icon="id-badge" size="sm" />
            {project.responsible}
          </TextHero>
        </StyledIconInfoWrapper>
        <StyledIconInfoWrapper title={`Category: "${project.category}"`}>
          <TextHero small>
            <Icons padRight icon="sitemap" size="sm" />
            {project.category}
          </TextHero>
        </StyledIconInfoWrapper>
        <StyledIconInfoWrapper title={`Complexity: "${project.complexity}"`}>
          <TextHero small>
            <Icons padRight icon="cubes" size="sm" />
            {project.complexity}
          </TextHero>
        </StyledIconInfoWrapper>
      </StyledCardHeader>
      <Separator height="1.25em" />
      <DisplayInfo label="description" value={project.description} />
      <DisplayInfo
        label="savings amount"
        value={formatCurrency(project.savingsAmount, project.currency)}
      />
    </StyledContent>
  </StyledProjectCard>
);

CardProject.propTypes = {
  project: PropTypes.shape({
    category: PropTypes.string,
    complexity: PropTypes.string,
    currency: PropTypes.string,
    description: PropTypes.string,
    project: PropTypes.number,
    savingsAmount: PropTypes.number,
    startDate: PropTypes.string,
    responsible: PropTypes.string,
    normalized: PropTypes.shape({ startDate: PropTypes.string }),
    reactKeyProp: PropTypes.number,
  }).isRequired,
};

export default CardProject;
