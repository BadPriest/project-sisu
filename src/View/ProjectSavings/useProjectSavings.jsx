import * as React from "react";

import useFetch from "use-http";
import { normalizeProjects } from "./normalizeProjectSavings";
import { ENDPOINTS, getFullApiUrl } from "../../Core/Api/endpoints";

export const useProjectSavings = () => {
  const url = getFullApiUrl(ENDPOINTS.PROJECT_SAVINGS);
  const [projects, setProjects] = React.useState();

  const { get, loading, data, error } = useFetch(url, { suspense: true });

  const getProjects = async () => get();

  React.useEffect(() => {
    if (data) {
      setProjects(normalizeProjects(data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  React.useEffect(() => {
    if (!loading) {
      getProjects();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { projects, loading, error };
};

export default useProjectSavings;
