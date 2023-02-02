/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useFetch(url: string, deps) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        const parsedData = (await response.json()) as unknown;

        setData(parsedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
    // ? we need to disable the eslint rule here because we want to run the effect with any dependency passed to the hook
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  }, [url, ...deps]);

  // ? These are simply any because we don't know what the data will be
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { data, error, loading };
}
