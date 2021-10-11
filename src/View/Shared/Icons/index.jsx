import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styles from "./styles";

export const Icons = ({ padLeft, padRight, color, ...otherProps }) => {
  const { StyledWrapper } = Styles;
  const { icon, size, spin } = { ...otherProps };

  return (
    <StyledWrapper padLeft={padLeft} padRight={padRight} color={color}>
      <FontAwesomeIcon {...{ icon, size, spin }} />
    </StyledWrapper>
  );
};

Icons.propTypes = {
  padLeft: PropTypes.bool,
  padRight: PropTypes.bool,
  color: PropTypes.string,
};

Icons.defaultProps = {
  padLeft: false,
  padRight: false,
  color: "inherit",
};

Icons.Styles = { ...Styles };

export default Icons;
