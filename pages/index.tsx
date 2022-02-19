import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LaunchCard, { LaunchCardProps } from "../Components/LaunchCard";
// Example of using next/Image
// <Image src='https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png' alt='ss' width='200px' height='200px'/>

export default function Home({ launches }: { launches: LaunchCardProps[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {launches.map((launch) => (
          <span key={launch.flightNumber}>
            <LaunchCard {...launch} />
          </span>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.spacexdata.com/v3/launches");

  const data: any[] = await res.json();
  const topTen = data.slice(0, 10);

  const launches = topTen.map((launch) => ({
    flightNumber: launch.flight_number,
    missionName: launch.mission_name,
    launchDate: launch.launch_date_utc,
    coreSerials: launch.rocket.first_stage.cores.map((x) => x.core_serial),
    payloads: launch.rocket.second_stage.payloads.map((x) => ({
      payloadId: x.payload_id,
      payloadType: x.payload_type,
    })),
    image: launch.links.mission_patch_small,
    launchSuccess: launch.launch_success,
    launchFailureDetails: launch.launch_failure_details || null,
  }));

  return {
    props: {
      launches,
    },
  };
}
