const BASE_URL = 'https://api.spacexdata.com/';

export const getLaunchesData = async () => {
  return await (await fetch(`${BASE_URL}v5/launches`)).json();
};
