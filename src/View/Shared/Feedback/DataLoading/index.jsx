import React from "react";
import { PropTypes } from "prop-types";
import { TextHero } from "../../TextHero";

import { StyledWrapper } from "./styles";

export const FeedbackDataLoading = ({ title }) => (
  <StyledWrapper>
    <TextHero>{title}</TextHero>
  </StyledWrapper>
);

FeedbackDataLoading.propTypes = {
  title: PropTypes.string,
};

FeedbackDataLoading.defaultProps = {
  title: "Loading",
};

export default FeedbackDataLoading;
