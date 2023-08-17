import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "BLOG | heeji.dev",
  description: "프론트엔드 개발자의 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </head>

      <body className="bg-base-100">
        <header>
          <Nav />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
