import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
