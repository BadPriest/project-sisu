import React from "react";
import { PropTypes } from "prop-types";

import { StyledWrapper, StyledLabel, StyledValue } from "./styles";

export const DisplayInfoHero = ({ label, value, inline, small }) => (
  <StyledWrapper small={small} inline={inline}>
    <StyledLabel small>{label}</StyledLabel>
    <StyledValue title={value}>{value}</StyledValue>
  </StyledWrapper>
);

DisplayInfoHero.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  inline: PropTypes.bool,
  small: PropTypes.bool,
};

DisplayInfoHero.defaultProps = {
  value: "--",
  inline: false,
  small: false,
};

export default DisplayInfoHero;
