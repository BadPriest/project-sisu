import { useMemo, useState } from "react";

import moment from "moment";

import { errorCodes } from "../../../Core/Localization/localization-keys.en";
import { isValidDate } from "../../../Utils/parseDates";

export const SORTING_ORDER = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
};

export const getNewSortableConfig = (key, direction) => ({
  key,
  direction,
});

export const useSortCollection = (collection, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const compareNumbers = (a, b, direction) =>
    direction === SORTING_ORDER.ASCENDING ? +a - +b : +b - +a;

  const compareStrings = (a, b, direction) =>
    direction === SORTING_ORDER.ASCENDING
      ? a.localeCompare(b, "pt-BR")
      : b.localeCompare(a, "pt-BR");

  const compareDates = (a, b, direction) => {
    const dateA = moment(a);
    const dateB = moment(b);

    if (direction === SORTING_ORDER.ASCENDING) {
      return dateA.isBefore(dateB) ? -1 : 1;
    }

    if (direction === SORTING_ORDER.DESCENDING) {
      return dateB.isBefore(dateA) ? -1 : 1;
    }

    return 0;
  };

  const getComparisonFunction = (value) => {
    if (typeof value === "number") {
      return compareNumbers;
    }

    if (typeof value === "string") {
      return isValidDate(value) ? compareDates : compareStrings;
    }

    return [...collection].sort;
  };

  const sortedCollection = useMemo(() => {
    const sorted = [...collection];
    if (sortConfig !== null && sorted) {
      const { key } = sortConfig;

      sorted.sort((a, b) => {
        const propValue = a[key];
        const compare = getComparisonFunction(propValue);

        return compare(
          a[sortConfig.key],
          b[sortConfig.key],
          sortConfig.direction
        );
      });
    }

    return sorted;
  }, [collection, sortConfig]);

  const getDirection = (key) => {
    let direction = SORTING_ORDER.ASCENDING;
    const keyWasSorted = sortConfig && sortConfig.key === key;
    const isAscending =
      sortConfig && sortConfig.direction === SORTING_ORDER.ASCENDING;

    if (keyWasSorted && isAscending) {
      direction = SORTING_ORDER.DESCENDING;
    }

    return direction;
  };

  const requestSort = (key) => {
    if (!collection || collection.length === 0) {
      return;
    }

    if (Object.keys(collection[0]).includes(key)) {
      const direction = getDirection(key);
      setSortConfig({ key, direction });
      return;
    }

    throw new Error(errorCodes.sortErrors.KeyNotFound);
  };

  return { sortedCollection, requestSort, sortConfig };
};

export default useSortCollection;
