import Head from "next/head";
import spotifyPreviewFinder from "spotify-preview-finder";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StreamItYourWay from "../components/StreamItYourWay";
import TrackList from "../components/TrackList";
import MusicVideo from "../components/MusicVideo";

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

  for (let i = 0; i < album.tracks.items.length; i++) {
    const item = album.tracks.items[i];
    const result = await spotifyPreviewFinder(item.name, 1);

    album.tracks.items[i].preview = result;
  }

  album.color = "#9A8FF6";

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
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <div className="relative h-screen">
        {/* bg image */}
        <div
          className={`absolute inset-0 bg-cover bg-center blur-xs z-0`}
          style={{ backgroundImage: `url(${album.images[0].url})` }}
        ></div>

        {/* gradient */}
        <div className="absolute mb-[-10px] inset-0 bg-gradient-to-b from-transparent to-[#121011] to-98% z-1"></div>

        {/* content */}
        <div className="relative z-2">
          <Header />
          <Hero album={album} />
          <StreamItYourWay />
          <TrackList album={album} />
          <MusicVideo />
        </div>
      </div>
    </>
  );
}
