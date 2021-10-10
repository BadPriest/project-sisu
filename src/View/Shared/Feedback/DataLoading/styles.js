import styled, { keyframes } from "styled-components";
import { TextHero } from "../../TextHero";

const getColoredFlickerLoading = (props) => keyframes`
  // ? Made with function bcs the theming wasn't accessible straight through on styled.keyframes
  // ? see https://stackoverflow.com/questions/59952573/styled-components-pass-props-theme-to-keyframes#59952676
  0%   { 
    background-color: ${props.theme.colors.success};
    opacity:0.6; 
  }

  100%  { opacity:0; }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100%;
  font-size: 4em;

  & ${TextHero} {
    font-size: inherit;
    opacity: 0.4;
  }

  &::after {
    content: " ";
    width: 0.5em;
    aspect-ratio: 0.7;
    background-color: ${({ theme }) => theme.colors.text};
    margin-left: 0.2em;
    animation: 800ms ${(props) => getColoredFlickerLoading(props)} ease-out
      infinite;
  }
`;

export default StyledWrapper;
