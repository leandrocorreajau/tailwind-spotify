import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Spotify",
  description: "Love music",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-50">{children}</body>
    </html>
  );
}
