import React, { useEffect, useState } from 'react';
import { Launches } from '../../types';
import { getLaunchesData } from '../Client';
import styles from '../../styles/LaunchesList.module.css';
import LaunchCard from '../LaunchCard/LaunchCard';

const LaunchesList = () => {
  const [launches, setLaunches] = useState<Launches[]>();
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    getLaunchesData()
      .then((resp) => {
        setLaunches(resp.slice(0, 10));
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const renderError = () => {
    return (
      <div>
        <span data-testid="errorMessage">Something went wrong</span>
      </div>
    );
  };

  //   name: string;
  //   date_utc: string;
  //   cores: Core[];
  //   payloads: string[];
  //   image: string;
  //   success: boolean;
  //   failures: Failure[];

  const renderLaunchCards = () => {
    return launches?.map((launch: Launches) => (
      <LaunchCard
        key={launch.id}
        name={launch.name}
        date_utc={launch.date_utc}
        cores={launch.cores}
        payloads={launch.payloads}
        image={launch.links.patch.small}
        success={launch.success}
        failures={launch.failures}
      />
    ));
  };

  return <div>{error ? renderError() : <ul className={styles.container}>{renderLaunchCards()}</ul>}</div>;
};

export default LaunchesList;
