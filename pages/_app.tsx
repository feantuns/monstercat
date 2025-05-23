import "../styles/global.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-kanit",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={kanit.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
