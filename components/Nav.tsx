import Link from "next/link";
import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";
import { CookieValueTypes } from "cookies-next";

const navlinks: { title: string; link: string }[] = [
  { title: "Home", link: "/" },
  { title: "Post", link: "/post" },
];

export default function Nav({ theme }: { theme: CookieValueTypes }) {
  return (
    <nav className="navbar flex md:px-32 lg:px-52 border-b-1">
      <section className="flex-1 gap-1">
        {navlinks.map((nav) => (
          <Link key={nav.title} href={nav.link}>
            <span className="btn btn-ghost normal-case text-lg border-none">
              {nav.title}
            </span>
          </Link>
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
