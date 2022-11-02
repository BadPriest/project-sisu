import { useEffect, useState } from "react";

import useFetch from "use-http";
import { normalizeProjectSavingsData } from "./normalizeProjectSavingsData";

export const useOfflineProjectSavingsData = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(false);

  const { get, data, error } = useFetch("data.json", {
    suspense: true,
  });

  const getProjects = async () => get();

  useEffect(() => {
    if (data?.length && !error && !loading) {
      setProjects(normalizeProjectSavingsData(data));
    }
  }, [data]);

  useEffect(() => {
    if (loading) return;

    setLoading(true);

    const timer = setTimeout(() => {
      getProjects().then((res) => {
        setLoading(() => false);
        return res;
      });
    }, 1500);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer);
  }, []);

  return { projects, loading, error };
};

export default useOfflineProjectSavingsData;
