"use client";
import { useEffect } from "react";
import { FaBeer } from "react-icons/fa";

export default function Page() {
  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
        }),
      });

      const data = await res.json();

      console.log("Access Token", data);
    };

    fetchAlbum();
  }, []);

  return (
    <h1>
      Hello, Next.js! <FaBeer />
    </h1>
  );
}
