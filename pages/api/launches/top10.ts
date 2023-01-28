// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const { SPACEX_API_BASEURL, SPACEX_API_LAUNCHES_SLUG, SPACEX_API_CORES_SLUG } = process.env;
const LAUNCHES_URL = `${SPACEX_API_BASEURL}${SPACEX_API_LAUNCHES_SLUG}/query`;
const CORES_URL = `${SPACEX_API_BASEURL}${SPACEX_API_CORES_SLUG}/query`;

const LAUNCHES_QUERY = {
  query: {},
  options: {
    select: ['name', 'date_utc', 'cores', 'payloads', 'links'],
    populate: [
      {
        path: 'payloads',
        select: ['id', 'type'],
      },
    ],
  },
};

const coresQuery = (ids: string[]) => ({
  query: { id: { $in: ids } },
  options: {
    select: ['serial'],
  },
});

export default async function handler(request, response) {
  try {
    // Retrieve the top 10 launches
    const { docs: launches } = (await axios.post<QueryResult<SpaceXLaunch>>(LAUNCHES_URL, LAUNCHES_QUERY)).data;
    // Retrieve the cores serials for the launches
    const serials = launches.map(({ cores }) => cores.map(({ core }) => core)).flat();
    // Retrieve the cores data
    const { docs: cores } = (await axios.post<QueryResult<SpaceXCore>>(CORES_URL, coresQuery(serials))).data;
    // Map the data to the desired format
    const data = launches.map(({ id, name, date_utc, links, payloads }) => ({
      id,
      name,
      date: date_utc,
      image_url: links.patch.small,
      core: cores?.[0]?.serial,
      payloads,
    }));

    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
