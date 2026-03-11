import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trailseeker",
  description: "Find your next hike with Trailseeker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
