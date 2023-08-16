import Link from "next/link";
import Image from "next/image";

const navlinks: { title: string; link: string }[] = [
  { title: "Home", link: "/" },
  { title: "Post", link: "/post" },
];

export default function Nav() {
  return (
    <nav>
      <div>
        <Image src={"/avatar.jpg"} alt="logo-image" width={40} height={40} />
      </div>

      {navlinks.map((nav) => (
        <Link key={nav.title} href={nav.link}>
          <span>{nav.title}</span>
        </Link>
      ))}
    </nav>
  );
}
