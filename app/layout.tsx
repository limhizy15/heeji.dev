import Nav from "@/app/_components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import "@/styles/highlight-js/a11y-dark.css";
import { getCurrentTheme } from "@/utils/colorTheme";
import "@code-hike/mdx/dist/index.css";
import { Providers } from "./providers";

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
      <body>
        <Providers>
          <header>
            <Nav theme={theme} />
          </header>

          <main className="flex align-middle justify-center items-center">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
