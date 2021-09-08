import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSortAmountUp,
  faSortAmountDownAlt,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  setup: () => {
    library.add(faSortAmountUp, faSortAmountDownAlt);
  },
};

export default Icons;
