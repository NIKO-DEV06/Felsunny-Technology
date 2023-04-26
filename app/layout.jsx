import "./globals.css";
import { Jost } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const alata = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Felsunny Technology",
  description:
    "A multipurpose business organization that deals with sales and distribution, government supplies, construction, consultancy services, gadgets & devices and property sales",
  keywords: [
    "felsunny",
    "felsunny technology",
    "felix sunday ayeniko",
    "ayeniko",
    "felsunny tech",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alata.className} bg-[#535155]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
