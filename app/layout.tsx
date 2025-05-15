
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Aihoston VPS Hosting",
  description: "Fast and affordable VPS hosting with full root access.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
