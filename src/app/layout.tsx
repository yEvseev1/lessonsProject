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
    <html lang="en" className='h-full'>
    <body className={`${manrope.className} bg-gray-500 h-full `}>
    <div>
      layout 1
    </div>
      {children}
    </body>
    </html>
  );
}
