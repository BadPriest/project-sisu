import { normalizeString } from "./parseStrings";

export const parseNonStandardPropCasing = (prop) => {
  const hasSpaceThenLowercaseChar = /\s(\D)/g;
  const matches = prop.match(hasSpaceThenLowercaseChar);

  let finalProp = String(prop);

  matches?.forEach((match) => {
    const upperCasedMatch = match.toUpperCase().trim();
    finalProp = finalProp.replace(match, upperCasedMatch);
  });

  return String(finalProp);
};

export const parseNullableProp = (obj, prop, defaultValue = "") => {
  const value = obj[prop];
  const isNull =
    value === null ||
    typeof value === "undefined" ||
    (typeof value === "string" && normalizeString(value) === "null");

  return isNull ? defaultValue : value;
};
