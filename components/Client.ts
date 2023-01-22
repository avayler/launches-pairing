const BASE_URL = 'https://api.spacexdata.com/v5/';

export const getLaunchesData = async (limit: number) => {
  return await (await fetch(`${BASE_URL}launches?limit=10`)).json();
};
