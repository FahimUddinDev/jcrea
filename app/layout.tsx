import type { Metadata } from "next";
import Navbar from "./components/global/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jcrea",
  description: "Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-5 md:pt-10 font-urbanist bg-white">
        <div className="px-4">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
