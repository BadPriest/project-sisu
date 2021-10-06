import React from "react";
import { PropTypes } from "prop-types";

import { Icons } from "../../Icons";
import { Separator } from "../../Separator";

import {
  StyledWrapper,
  StyledIconWrapper,
  StyledTextWrapper,
  StyledTitle,
  StyledBody,
  StyledIconText,
} from "./styles";

export const FeedbackBadOutcome = ({ title, motive, cta }) => (
  <StyledWrapper>
    <StyledIconWrapper>
      <Icons icon="meh" size="4x" />
      <StyledIconText>oops!</StyledIconText>
    </StyledIconWrapper>
    <StyledTextWrapper>
      <StyledTitle large>{title}</StyledTitle>
      <StyledBody large>{motive}</StyledBody>
      <StyledBody large>{cta}</StyledBody>
      <Separator height="0.4em" />
    </StyledTextWrapper>
  </StyledWrapper>
);

FeedbackBadOutcome.propTypes = {
  title: PropTypes.string,
  motive: PropTypes.string,
  cta: PropTypes.string,
};

FeedbackBadOutcome.defaultProps = {
  title: "Bad thing is bad",
  motive: "Because reasons.",
  cta: "Have they ever tried to be better?",
};

export default FeedbackBadOutcome;
