import React from 'react';
import { Core, Failure } from '../../types';
import styles from '../../styles/LaunchCard.module.css';

type Props = {
  name: string;
  date_utc: string;
  cores: Core[];
  payloads: string[];
  image: string;
  success: boolean;
  failures: Failure[];
};

const LaunchCard = ({ name, date_utc, cores, payloads, image, success, failures }: Props) => {
  return (
    <li className={styles.card}>
      <h2 data-testid="name">{name}</h2>
      <div className={styles.section}>
        <p>Date: </p>
        <p data-testid="date_utc">{new Date(date_utc).toISOString().split('T')[0]}</p>
      </div>
      <div data-testid="cores" className={styles.section}>
        <span>cores: </span>
        <span>{cores[0].core}</span>
      </div>

      <div data-testid="payloads" className={styles.section}>
        <span>payload: </span>
        <span>{payloads}</span>
      </div>

      <div className={styles.section}>
        <p>Success: </p>
        <p>{success ? 'YES' : 'NO'} </p>
      </div>
      {!success && (
        <div>
          <span>Failures:</span>
          {failures.map((f: Failure, index: number) => (
            <React.Fragment key={index}>
              {f.altitude && (
                <div className={styles.section}>
                  <span>altitude: </span>
                  <span>{f.altitude}</span>
                </div>
              )}
              {f.reason && (
                <div className={styles.section}>
                  <span>reason: </span>
                  <span>{f.reason}</span>
                </div>
              )}
              {f.time && (
                <div className={styles.section}>
                  <span>altitude: </span>
                  <span>{f.time}</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      <div className={styles.imageContainer}>
        <img src={image} className={styles.image} />
      </div>
    </li>
  );
};

export default LaunchCard;

// id and type from payloads
// display the image from links.patch.small in links
// use success and failures to show the user the success/failure of launch and reason of failure.
