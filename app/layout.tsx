import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./UIComponents/header";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Rest Country",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-veryLightGray_LightModeBG`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
