import { library } from "@fortawesome/fontawesome-svg-core";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
  faMeh,
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
      faSearch,
      faMeh,
      faLinkedin
    );
  },
};

export default Icons;
