import Link from "next/link";
import Image from "next/image";

const navlinks: { title: string; link: string }[] = [
  { title: "Home", link: "/" },
  { title: "Post", link: "/post" },
];

export default function Nav() {
  return (
    <nav className="navbar flex p-8">
      <div className="flex-1">
        {navlinks.map((nav) => (
          <Link key={nav.title} href={nav.link}>
            <span className="btn btn-ghost normal-case text-lg">
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
