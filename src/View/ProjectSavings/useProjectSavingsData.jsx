import { useEffect, useState } from "react";

import useFetch from "use-http";
import { normalizeProjectSavingsData } from "./normalizeProjectSavingsData";
import { ENDPOINTS, getFullApiUrl } from "../../Core/Api/endpoints";

export const useProjectSavingsData = () => {
  const url = getFullApiUrl(ENDPOINTS.PROJECT_SAVINGS);
  const [projects, setProjects] = useState();

  const { get, loading, data, error } = useFetch(url, { suspense: true });

  const getProjects = async () => get();

  useEffect(() => {
    if (data?.length && !error && !loading) {
      setProjects(normalizeProjectSavingsData(data));
    }
  }, [data]);

  useEffect(() => {
    if (!loading) {
      getProjects();
    }
  }, []);

  return { projects, loading, error };
};

export default useProjectSavingsData;
