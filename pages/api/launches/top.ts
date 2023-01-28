// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

// Mongoose Query Object
const query = (utcString: string) => ({
  query: {
    date_utc: { $lte: utcString },
    success: { $ne: null },
  },
  options: {
    limit: 10,
    sort: [['date_utc', 'desc']],
    select: ['name', 'date_utc', 'links.patch.small', 'failures', 'success'],
    populate: [
      {
        path: 'cores.core',
        select: ['serial'],
      },
      {
        path: 'payloads',
        select: ['id', 'type'],
      },
    ],
  },
});

export default async function handler(request, response) {
  try {
    const { SPACEX_API_BASEURL, SPACEX_API_LAUNCHES_SLUG } = process.env;
    const url = `${SPACEX_API_BASEURL}${SPACEX_API_LAUNCHES_SLUG}/query`;
    const utcString = new Date().toUTCString();

    // Retrieve the top 10 launches
    const { docs: launches } = (await axios.post<QueryResult<SpaceXLaunch>>(url, query(utcString))).data;
    // Map the data to the desired format
    const data = launches.map<Launch>(({ links, cores, payloads, failures, ...rest }) => ({
      id: rest.id,
      name: rest.name,
      payloads,
      success: rest.success,
      date: rest.date_utc,
      image_url: links.patch.small,
      core: cores?.[0]?.core?.serial,
      failureReason: failures?.[0]?.reason,
    }));

    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
