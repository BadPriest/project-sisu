import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSortAmountDownAlt,
  faCaretDown,
  faCaretUp,
  faSort,
  faPuzzlePiece,
  faIdBadge,
  faSitemap,
  faCubes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  setup: () => {
    library.add(
      faSortAmountDownAlt,
      faCaretUp,
      faCaretDown,
      faSort,
      faPuzzlePiece,
      faIdBadge,
      faSitemap,
      faCubes,
      faSearch
    );
  },
};

export default Icons;
