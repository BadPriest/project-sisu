import { renderHook, act } from "@testing-library/react-hooks";
import {
  getNewSortableConfig,
  useSortCollection,
  SORTING_ORDER,
} from "./useSortCollection";

import { someCollectionFixture } from "../../../Utils/TestFixtures/constants";

test("Verifies that initial sort works", async () => {
  const INITIAL_SORT = getNewSortableConfig("order", SORTING_ORDER.DESCENDING);

  const { result } = renderHook(() =>
    useSortCollection(someCollectionFixture, INITIAL_SORT)
  );

  const [actual1, actual2, actual3] = [...result.current.sortedCollection];

  expect(actual1.order).toBe(3);
  expect(actual2.order).toBe(2);
  expect(actual3.order).toBe(1);
});

test("Verifies that sorting direction can change", async () => {
  const INITIAL_SORT = getNewSortableConfig("order", SORTING_ORDER.DESCENDING);

  const { result } = renderHook(() =>
    useSortCollection(someCollectionFixture, INITIAL_SORT)
  );

  //   console.log(
  //     "collection initial order:",
  //     result.current.sortedCollection.map((i) => ({ [i.name]: i.order }))
  //   );

  act(() => {
    result.current.requestSort("order");
  });

  const [actual1, actual2, actual3] = [...result.current.sortedCollection];

  //   console.log(
  //     "collection final order:",
  //     result.current.sortedCollection.map((i) => ({ [i.name]: i.order }))
  //   );

  expect(actual1.order).toBe(1);
  expect(actual2.order).toBe(2);
  expect(actual3.order).toBe(3);
});

test("Verifies that sorting property/direction can change", async () => {
  const INITIAL_SORT = getNewSortableConfig("order", SORTING_ORDER.DESCENDING);

  const { result } = renderHook(() =>
    useSortCollection(someCollectionFixture, INITIAL_SORT)
  );

  // console.log(
  //   "collection initial order:",
  //   result.current.sortedCollection.map((i) => ({ [i.name]: i.order }))
  // );

  act(() => {
    result.current.requestSort("name");
  });

  const [actual1, actual2, actual3] = [...result.current.sortedCollection];

  //   console.log(
  //     "collection final order:",
  //     result.current.sortedCollection.map((i) => ({ [i.name]: i.order }))
  //   );

  expect(actual1.name).toBe("earth");
  expect(actual2.name).toBe("mercury");
  expect(actual3.name).toBe("venus");
});

test("Verifies that sorting by inexistent prop throws meaningful error", async () => {
  const { result } = renderHook(() => useSortCollection(someCollectionFixture));

  expect(result.current.requestSort("exception")).toThrow(
    "[exception] sort error: Key not found!"
  );
});
