import { renderHook } from "@testing-library/react-hooks";
import { useSearchCollection } from "./useSearchCollection";
import { filterCollection as filterFlattenCollection } from "../Utils/filterFlattenCollection";
import { someCollectionFixture } from "../../../Utils/TestFixtures/constants";

test("Verifies that hook processes data", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useSearchCollection(someCollectionFixture, filterFlattenCollection)
  );

  const event = { target: { value: "venus" } };
  result.current.setQuery(event);

  await waitForNextUpdate();

  const actual = result.current.filteredCollection[0].name;

  expect(result.current.query).toBe("venus");
  expect(result.current.filteredCollection).toHaveLength(1);
  expect(actual).toBe("venus");
});
