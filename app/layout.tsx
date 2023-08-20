import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import "@/styles/highlight-js/a11y-dark.css";
import { getCurrentTheme } from "@/utils/colorTheme";
import "@code-hike/mdx/dist/index.css";

export const metadata: Metadata = {
  title: "BLOG | heeji.dev",
  description: "프론트엔드 개발자의 블로그입니다.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getCurrentTheme();

  return (
    <html lang="ko" data-theme={theme}>
      <body className="bg-base-100">
        <header>
          <Nav theme={theme} />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
