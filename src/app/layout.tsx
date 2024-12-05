import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/components/ui/fonts";
import { Header } from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Salt Talent App v.2.0",
  description: "Made by JSFS 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${roboto.className} antialiased space-y-8 overscroll-none`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
