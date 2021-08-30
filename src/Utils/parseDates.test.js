import { parseDateForDisplay } from "./parseDates";

test("Parses non ISO date correctly", () => {
  const current = "1988-08-23";
  const expected = "23.08.1988";
  const actual = parseDateForDisplay(current, ["YYYY-MM-DD"]);

  expect(actual).toEqual(expected);
});

test("Parses ISO date correctly", () => {
  const current = "1988-08-23T00:00:00+00:00";
  const expected = "23.08.1988";
  const actual = parseDateForDisplay(current);

  expect(actual).toBe(expected);
});
