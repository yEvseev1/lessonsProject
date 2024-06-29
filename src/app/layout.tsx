import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";

const manrope = Manrope({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "test project",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${manrope.className} bg-gray-500`}>
      {children}
    </body>
    </html>
  );
}
