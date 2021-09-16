import React from "react";
import { PropTypes } from "prop-types";

import { StyledWrapper, StyledLabel, StyledValue } from "./styles";

export const DisplayInfo = ({ label, value, inline }) => (
  <StyledWrapper inline={inline}>
    <StyledLabel small>{label}</StyledLabel>
    <StyledValue title={value}>{value}</StyledValue>
  </StyledWrapper>
);

DisplayInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  inline: PropTypes.bool,
};

DisplayInfo.defaultProps = {
  value: "--",
  inline: false,
};

export default DisplayInfo;
