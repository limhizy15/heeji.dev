import Image from "next/image";
import { CookieValueTypes } from "cookies-next";
import styles from "./Nav.module.css";

const navlinks: { title: string; link: string }[] = [
  { title: "posts", link: "/post" },
  { title: "about", link: "/about" },
];

export default function Nav({ theme }: { theme: CookieValueTypes }) {
  return (
    <nav className={styles.navbar}>
      <Image src={"/logo.png"} alt="logo-image" width={120} height={120} />

      <ul className={styles.navList}>
        {navlinks.map((nav) => (
          <li key={nav.link}>
            <a href={nav.link} className={styles.navItem}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
