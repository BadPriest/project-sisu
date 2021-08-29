export const ENDPOINTS = {
  PROJECT_SAVINGS: "data",
};

// Builds API with given endpoint or just returns the base API URL
export const getFullApiUrl = (endpoint) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  return endpoint ? `${apiUrl}${endpoint}` : apiUrl;
};

export default ENDPOINTS;
