import Link from "next/link";
import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";
import { CookieValueTypes } from "cookies-next";
import { Button, Container, Stack } from "@chakra-ui/react";

const navlinks: { title: string; link: string }[] = [
  // { title: "Home", link: "/" },
  { title: "Post", link: "/post" },
  { title: "About", link: "/about" },
];

export default function Nav({ theme }: { theme: CookieValueTypes }) {
  return (
    <Container maxW={"container.md"} pt={4}>
      <Stack flexDir={"row"} justifyContent={"space-between"}>
        <Stack flexDir={"row"} spacing={1}>
          {navlinks.map((nav) => (
            <Button key={nav.link}>
              <Link href={nav.link}>{nav.title}</Link>
            </Button>
          ))}
        </Stack>

        <Stack flexDir={"row"} spacing={4}>
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
        </Stack>
      </Stack>
    </Container>
  );
}
