import { normalizeString } from "./parseStrings";

test("Removes spaces", () => {
  const current = "spaced text";
  const expected = "spacedtext";
  const actual = normalizeString(current);

  expect(actual).toBe(expected);
});

test("Removes special characters and accents", () => {
  const current = "áéótext!@#_123";
  const expected = "aeotext123";
  const actual = normalizeString(current);

  expect(actual).toBe(expected);
});

test("Sets all to lowercase", () => {
  const current = "SHOULD BE LOWER CASED";
  const expected = "shouldbelowercased";
  const actual = normalizeString(current);

  expect(actual).toBe(expected);
});
