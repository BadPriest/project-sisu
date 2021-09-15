import React from "react";
import { light } from "./color-presets";

const colors = light;

const typography = {
  headings: {
    fontFamily: "montserratextrabold",
    h1: { fontSize: "2rem", fontWeight: "800" },
  },
  body: {
    fontFamily: "montserratthin",
    small: { fontSize: "0.7rem" },
    regular: { fontSize: "1rem" },
    large: { fontSize: "1.1rem" },
  },
};

export const Theme = { colors, typography };

export const useTheme = () => {
  const [theme, setTheme] = React.useState({
    colors,
    typography,
  });

  const changeTheme = (newTheme) => {
    setTheme({ typography, newTheme });
  };

  const newTheme = (props) => {
    setTheme({
      colors,
      typography,
      ...props,
    });
  };

  return { theme, changeTheme, newTheme };
};

export default useTheme;
