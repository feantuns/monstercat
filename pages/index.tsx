import Head from "next/head";

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
      <div className="relative h-screen">
        <div
          className={`absolute inset-0 bg-[url('${album.images[0].url}')] bg-cover bg-center blur-sm z-0`}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10"></div>

        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">Welcome</h1>
        </div>
      </div>
    </>
  );
}
