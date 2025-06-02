import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./ClientLayout";

// Google Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Local Fonts
const cullenGinto = localFont({
  src: [
    {
      path: "../../public/fonts/CullenGintoNormal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CullenGintoNormal-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CullenGinto-NordRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCArizonaMix-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-cullen", // your CSS variable
  display: "swap",
});

export const metadata = {
  title: "Diamond",
  description: "Buy your luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cullenGinto.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
