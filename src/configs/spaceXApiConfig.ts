export const spaceXApiConfig = {
  config: {
    method: "post",
    url: "https://api.spacexdata.com/v5/launches/query",
    data: {
      query: {},
      options: {
        limit: 100,
        select: ["name", "date_utc", "cores", "payloads", "links", "failures"],
      },
    },
  },
  key: ["fetch", "launches"],
  staleTime: 1000 * 60 * 100,
  enabled: true,
};

export const spaceXApiConfigCores = (id: string) => {
  return {
    config: {
      method: "get",
      url: `https://api.spacexdata.com/v4/cores/${id}`,
    },
    key: ["fetch", "cores", id],
    staleTime: 1000 * 60 * 10,
    enabled: false,
  };
};
export const spaceXApiConfigPayloads = (id: string) => {
  return {
    config: {
      method: "get",
      url: `https://api.spacexdata.com/v4/payloads/${id}`,
    },
    key: ["fetch", "payloads", id],
    staleTime: 1000 * 60 * 10,
    enabled: false,
  };
};
