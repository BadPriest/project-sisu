import { PropTypes } from "prop-types";

import styled from "styled-components";

export const Separator = styled.div`
  margin: ${(props) => props.height || ""};
`;

Separator.propTypes = {
  height: PropTypes.string,
};

export default Separator;
