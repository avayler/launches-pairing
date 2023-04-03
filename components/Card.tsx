import React from 'react'

import { formatDate } from '../utils/datetimeFormatter';
import { SpaceXLaunch } from '../types/interface'

import styles from '../styles/Home.module.css';
import FormattedText from './FormattedText';

interface CardProps {
    launch: SpaceXLaunch
}

const Card = ({
    launch
}: CardProps) => {
    const { id, links, name, date_utc, cores, payloads, success, failures } = launch

    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img src={links.patch.small} alt="Launch Patch" />
            </div>
            <div className={styles.card_content}>
                <h2>{name}</h2>
                <p>Date: {formatDate(date_utc, 'GMT')}</p>
                <p>First Core Serial: {cores[0].core.serial}</p>
                {
                    payloads.map((payload, index) => {
                        return <div key={payload.id}>
                            <p title={payload.id}>Payload {index + 1}  : {payload.type}</p>
                        </div>
                    })
                }
                {success ? (
                    <p>Success</p>
                ) : (
                    <>
                        <p>Failed</p>
                        <br />
                        <p>Reason for Failure: </p>
                        {failures?.map((failure, index) => {
                            return <FormattedText key={id + index} text={`${ index + 1}. ${failure.reason}`} />
                        })}

                    </>
                )}
            </div>
        </div >
    );
}

export default React.memo(Card);
