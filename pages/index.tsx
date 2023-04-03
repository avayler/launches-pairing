import { useEffect, useState, useRef } from 'react';

import Card from '../components/Card'
import { post } from '../utils/api'
import { SpaceXLaunch } from '../types/interface'

import styles from '../styles/Home.module.css';

const Home = () => {
  const [launches, setLaunches] = useState<SpaceXLaunch[]>([]);
  const dataFetchedRef = useRef(false);

  useEffect(() => {

    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const fields = ["name", "date_utc", "payloads", "links", "success", "failures"]
    post<SpaceXLaunch[]>('https://api.spacexdata.com/v5/launches/query', fields)
      .then(({ data }) => {
        setLaunches(data.docs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>SpaceX Launches</h1>
      <div className={styles.grid}>
        {launches.map((launch) => (
          <Card key={launch.id}
            launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default Home;

