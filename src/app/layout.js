import "./globals.css";
import { Montserrat } from "next/font/google";
import Topbar from "../components/Topbar";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Searcher",
  description: "App to search artist using spotify API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
