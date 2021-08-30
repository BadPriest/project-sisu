import {
  parseNonStandardPropCasing,
  parseNullableProp,
} from "./dataNormalizer";

test("Parses spaced two-part string to camelCase", () => {
  const current = "camel case";
  const expected = "camelCase";
  const actual = parseNonStandardPropCasing(current);

  expect(actual).toBe(expected);
});

test("Parses infinite spaced string to camelCase", () => {
  const current = "camel case is a naming convention";
  const expected = "camelCaseIsANamingConvention";
  const actual = parseNonStandardPropCasing(current);

  expect(actual).toBe(expected);
});

test("Parses nullable props", () => {
  const current = {
    nullableProp1: undefined,
    nullableProp2: null,
    nullableProp3: "NULL",
    nullableProp4: "null",
    nullableProp5: "NuLl",
  };

  const expected = {
    nullableProp1: "",
    nullableProp2: "",
    nullableProp3: "",
    nullableProp4: "",
    nullableProp5: "",
  };

  const actual = {};
  Object.keys(current).forEach((key) => {
    actual[key] = parseNullableProp(current, key);
  });

  expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
});
