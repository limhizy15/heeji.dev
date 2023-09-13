import Link from "next/link";
import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";
import { CookieValueTypes } from "cookies-next";
import { Button } from "@chakra-ui/react";

const navlinks: { title: string; link: string }[] = [
  // { title: "Home", link: "/" },
  { title: "Post", link: "/post" },
  { title: "About", link: "/about" },
];

export default function Nav({ theme }: { theme: CookieValueTypes }) {
  return (
    <nav className="navbar flex md:px-32 lg:px-52 border-b-1">
      <section className="flex-1 gap-1">
        {navlinks.map((nav) => (
          <Button key={nav.link}>
            <Link href={nav.link}>{nav.title}</Link>
          </Button>
        ))}
      </section>

      <section className="gap-4">
        <ThemeToggleButton theme={theme} />

        <div>
          <Image
            className="rounded-full"
            src={"/avatar.jpg"}
            alt="logo-image"
            width={40}
            height={40}
          />
        </div>
      </section>
    </nav>
  );
}
