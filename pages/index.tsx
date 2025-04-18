import Head from "next/head";
import { FaBeer } from "react-icons/fa";

export const getStaticProps = async context => {
  const resToken = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.SPOTIFY_CLIENT_ID || "",
      client_secret: process.env.SPOTIFY_CLIENT_SECRET || "",
    }),
  });

  const { access_token } = await resToken.json();

  const resAlbum = await fetch(
    "https://api.spotify.com/v1/albums/6MEv8dNtVbKDW1WG4Hk6WZ",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const album = await resAlbum.json();

  return { props: { album } };
};

export default function Home({ album }) {
  console.log(album);

  return (
    <>
      <Head>
        <title>{`${album.name} - Monstercat`}</title>
        <meta name="description" content="Monstercat album page clone." />
        <meta property="og:title" content={`${album.name} - Monstercat`} />
        <meta
          property="og:description"
          content="Monstercat album page clone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>
        {album.name} <FaBeer />
      </h1>
    </>
  );
}
