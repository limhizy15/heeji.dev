import Link from "next/link";
import Image from "next/image";

const navlinks: { title: string; link: string }[] = [
  { title: "Home", link: "/" },
  { title: "Post", link: "/post" },
];

export default function Nav() {
  return (
    <nav className="navbar flex md:px-52 border-b-1">
      <div className="flex-1 gap-1">
        {navlinks.map((nav) => (
          <Link key={nav.title} href={nav.link}>
            <span className="btn normal-case text-lg bg-base-100 border-none">
              {nav.title}
            </span>
          </Link>
        ))}
      </div>

      <div>
        <Image
          className="rounded-full"
          src={"/avatar.jpg"}
          alt="logo-image"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}
