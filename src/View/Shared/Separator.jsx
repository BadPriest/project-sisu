import { PropTypes } from "prop-types";

import styled from "styled-components";

export const Separator = styled.div`
  height: 0.1px;
  margin: ${(props) => (props.height ? `${props.height} 0;` : "1rem 0;")};
`;

Separator.propTypes = {
  height: PropTypes.string,
};

export default Separator;
