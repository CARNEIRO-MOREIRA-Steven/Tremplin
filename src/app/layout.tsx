import type { Metadata } from "next";
import "./globals.css";


import NeonAnimate from './NeonAnimate/NeonAnimate'

export const metadata: Metadata = {
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body cz-shortcut-listen="true">
        <NeonAnimate />
        {children}
      </body>
    </html>
  );
}
