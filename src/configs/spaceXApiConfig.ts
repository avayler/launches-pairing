const spaceXApiConfig = {
  config: {
    method: "post",
    url: "https://api.spacexdata.com/v5/launches/query",
    data: {
      query: {},
      options: {
        limit: 10,
        select: ["name", "date_utc", "cores", "payloads", "links", "failures"],
      },
    },
  },
  key: ["fetch", "launches"],
  staleTime: 1000 * 60 * 10,
};

export default spaceXApiConfig;
