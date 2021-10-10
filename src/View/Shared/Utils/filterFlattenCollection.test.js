import { someCollectionFixture } from "../../../Utils/TestFixtures/constants";
import {
  filterCollection as filterFlattenCollection,
  getFlatValues,
} from "./filterFlattenCollection";

test("Filters collections by string properties", () => {
  const query = "venus";

  const filtered = filterFlattenCollection(someCollectionFixture, query);

  const actual = filtered[0].name;

  expect(filtered).toHaveLength(1);
  expect(actual).toBe(query);
});

test("Filters collections by number properties", () => {
  const query = 3;

  const filtered = filterFlattenCollection(someCollectionFixture, query);

  const actual = filtered[0].amount;

  expect(filtered).toHaveLength(1);
  expect(actual).toBe(query);
});

test("Filters collections by date properties", () => {
  const query = "1990";
  const expected = "01.01.1990";

  const filtered = filterFlattenCollection(someCollectionFixture, query);

  const actual = filtered[0].normalizedDate;

  expect(filtered).toHaveLength(1);
  expect(actual).toBe(expected);
});

test("Filter ignores special characters", () => {
  const query = "!@#$%  ^&*  (1990";
  const expected = "01011990";

  const results = filterFlattenCollection(someCollectionFixture, query);
  const actual = getFlatValues(results);
  expect(actual).toContain(expected);
});

test("Filter ignores casing", () => {
  const query = "EaRtH";
  const expected = "earth";

  const results = filterFlattenCollection(someCollectionFixture, query);
  const actual = getFlatValues(results);
  expect(actual).toContain(expected);
});

test("Useless search returns empty collection", () => {
  const query = "1234567890qwerty";

  const filtered = filterFlattenCollection(someCollectionFixture, query);

  expect(filtered).toHaveLength(0);
});
