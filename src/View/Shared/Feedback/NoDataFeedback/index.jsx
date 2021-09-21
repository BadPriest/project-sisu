import React from "react";

import { Icons } from "../../Icons";

import {
  StyledWrapper,
  StyledIconWrapper,
  StyledTextWrapper,
  StyledTitle,
  StyledBody,
  StyledIconText,
} from "./styles";

export const FeedbackNoData = () => (
  <StyledWrapper>
    <StyledIconWrapper>
      <Icons icon="meh" size="4x" />
      <StyledIconText>oops!</StyledIconText>
    </StyledIconWrapper>
    <StyledTextWrapper>
      <StyledTitle large>no data found</StyledTitle>
      <StyledBody large>
        Current search returned no results.
        <br />
        Try another combination.
      </StyledBody>
    </StyledTextWrapper>
  </StyledWrapper>
);

export default FeedbackNoData;
