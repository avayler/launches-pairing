import styles from "../styles/Home.module.css";
import Image from "next/image";

interface PayloadsInterface {
  payloadId: string;
  payloadType: string;
}

export interface LaunchCardProps {
  flightNumber: number;
  coreSerials: string[];
  image: string;
  launchDate: string;
  launchFailureDetails: {
    time: number;
    altitude: string | null;
    reason: string;
  } | null;
  launchSuccess: boolean;
  missionName: string;
  payloads: PayloadsInterface[];
}

export default function LaunchCard({
  missionName,
  launchDate,
  coreSerials,
  payloads,
  image,
  launchSuccess,
  launchFailureDetails,
  flightNumber,
}: LaunchCardProps) {
  const dateTime = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(launchDate));

  const serials = coreSerials.join(", ");

  const handlePayloads = () => {
    return payloads.map((payload, index) => (
      <div key={index}>
        <p>Id: {payload.payloadId}</p>
        <p>Type: {payload.payloadType}</p>
      </div>
    ));
  };

  return (
    <div className={styles.card}>
      <Image src={image} alt={missionName} width="200px" height="200px" />
      <p className={styles.title}>{missionName}</p>
      <div
        className={
          launchSuccess
            ? [styles.statusSuccess, styles.status].join(" ")
            : [styles.statusError, styles.status].join(" ")
        }
      >
        {launchSuccess ? " success" : " Failure"}
      </div>
      <p>
        Flight Number: <span className={styles.code}>{flightNumber}</span>
      </p>
      <p>
        Launch Date: <span className={styles.code}>{dateTime}</span>
      </p>
      <p>
        Core Serials: <span className={styles.code}>{serials}</span>
      </p>
      <p>Payloads:</p>
      <div className={styles.subText}>{handlePayloads()}</div>
      {!launchSuccess && (
        <div>
          <p>Failure Reason:</p>
          <div className={styles.subText}>{launchFailureDetails.reason}</div>
        </div>
      )}
    </div>
  );
}
