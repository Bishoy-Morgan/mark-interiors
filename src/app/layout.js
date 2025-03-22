import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

const suisseIntl = localFont({
  src: [
    {
      path: "../../public/fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-suisseIntl",
});

const atyp = localFont({
  src: [
    {
      path: "../../public/fonts/AtypDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-atyp",
});


export const metadata = {
  title: "Mark Interiors",
  description: "Mark Interiors for luxury interior designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${suisseIntl.variable} ${atyp.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
