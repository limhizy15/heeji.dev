import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

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
      <body>
        <header>
          <Nav />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
