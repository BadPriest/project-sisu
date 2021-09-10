import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSortAmountDownAlt,
  faCaretDown,
  faCaretUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  setup: () => {
    library.add(faSortAmountDownAlt, faCaretUp, faCaretDown, faSort);
  },
};

export default Icons;
