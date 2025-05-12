import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/ui/navbar/navbar";

export const metadata: Metadata = {
  title: "My Finance",
  description: "Manage your money yourself!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex h-screen">
        <div>
          <Navbar />
        </div>
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
