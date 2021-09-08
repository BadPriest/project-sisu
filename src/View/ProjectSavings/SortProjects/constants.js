import {
  getNewSortableConfig,
  SORTING_ORDER,
} from "../../Shared/Hooks/useSortCollection";

export const SORTING_OPTIONS = [
  {
    key: "startDate",
    label: "Start Date",
  },
  { key: "savingsAmount", label: "Savings Amount" },
];

export const INITIAL_SORT = getNewSortableConfig(
  "startDate",
  SORTING_ORDER.DESCENDING
);
