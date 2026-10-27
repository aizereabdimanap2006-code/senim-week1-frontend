import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SENIM — бастапқы жоба",
  description: "Студенттерге эмоциялық қолдау көрсету платформасының бірінші аптадағы бастапқы нұсқасы.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}
