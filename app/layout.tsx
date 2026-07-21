import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mentora AI | Adaptive AI Tutor",
  description: "The AI tutor that learns how every student learns.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
