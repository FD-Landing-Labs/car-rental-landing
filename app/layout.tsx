import type { Metadata } from "next";
import { Inter, Zalando_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const zalando = Zalando_Sans({
  variable: "--font-zalando",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FD Car Rental",
  description: "Car Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${zalando.variable} antialiased pt-24`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
