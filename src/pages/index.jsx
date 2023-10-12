import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Map from "react-map-gl/maplibre";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>cronicl tester</title>
      </Head>
      <main className={styles.main}>
        <Map
          reuseMaps
          attributionControl={false}
          mapStyle="https://tiles-eu.stadiamaps.com/styles/osm_bright.json"
          initialViewState={{
            longitude: -3.981756,
            latitude: 51.61242,
            zoom: 16.0,
          }}
        />
      </main>
    </div>
  );
}
