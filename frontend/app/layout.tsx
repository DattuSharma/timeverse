import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIMEVERSE — The World of Watch Intelligence",
  description: "Discover, understand and manage the watches you love.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
