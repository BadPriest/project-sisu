import {
  parseNonStandardPropCasing,
  parseNullableProp,
} from "../../Utils/dataNormalizer";
import { parseDateForDisplay } from "../../Utils/parseDates";

const normalizeStartDate = (rawProject) => ({
  ...rawProject,
  normalized: { startDate: parseDateForDisplay(rawProject.startDate) },
});

const deepNormalize = (obj) => {
  const normalized = {};

  Object.keys(obj).forEach((key) => {
    const parsedProp = parseNonStandardPropCasing(key);
    normalized[parsedProp] = parseNullableProp(obj, key);
  });

  return normalized;
};

export const normalizeProjectSavingsData = (rawProjects) => {
  const result = rawProjects.map((rawProject) => {
    let normalizedObj = { ...rawProject };

    normalizedObj = deepNormalize(normalizedObj);
    normalizedObj = normalizeStartDate(normalizedObj);

    return normalizedObj;
  });

  return result;
};

export default normalizeProjectSavingsData;
