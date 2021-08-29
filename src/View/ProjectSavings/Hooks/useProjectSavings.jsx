import * as React from "react";

import useFetch from "use-http";
import { ENDPOINTS, getFullApiUrl } from "../../../Core/Api/endpoints";

export const useProjectSavings = () => {
  const url = getFullApiUrl(ENDPOINTS.PROJECT_SAVINGS);

  const {
    get,
    loading,
    data: projects,
    error,
  } = useFetch(url, { suspense: true });

  const getProjects = () => get();
  React.useEffect(() => {
    if (!loading) {
      getProjects();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { projects, loading, error };
};

export default useProjectSavings;
