type useFetchApiType = typeof useFetch;

export const useFetchApi: useFetchApiType = (path, opts = {}) => {
  const config = useRuntimeConfig();

  opts.baseURL = "http://localhost:8090";
  return useFetch(path, opts);
};
