import React from "react";
import { PropTypes } from "prop-types";
import { Card } from "../../Shared/Card";
import { Text } from "../../Shared/Text";
import { normalizeString } from "../../../Utils/parseStrings";

export const CardProject = ({ project }) => (
  <Card
    key={project.reactKeyProp}
    complexity={normalizeString(project.complexity)}
  >
    <Text>project: {project.project}</Text>
    <Text>description {project.description}</Text>
    <Text>start date{project.normalized.startDate}</Text>
    <Text>category {project.category}</Text>
    <Text>responsible {project.responsible}</Text>
    <Text>savings amount{project.savingsAmount}</Text>
    <Text>currency {project.currency}</Text>
    <Text>complexity {project.complexity}</Text>
  </Card>
);

CardProject.propTypes = {
  project: PropTypes.shape(),
};

CardProject.defaultProps = {
  project: {},
};

export default CardProject;
