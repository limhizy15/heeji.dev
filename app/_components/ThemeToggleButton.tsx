"use client";

import { toggleTheme } from "@/utils/colorTheme";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CookieValueTypes } from "cookies-next";

export default function ThemeToggleButton({
  theme,
}: {
  theme: CookieValueTypes;
}) {
  const router = useRouter();

  const handleToggleTheme = async () => {
    await toggleTheme();

    router.refresh();
  };

  return (
    <button onClick={handleToggleTheme}>
      {theme === "dark" ? (
        <Image
          src={"/icon-dark.png"}
          alt={"icon-dark-mode"}
          width={36}
          height={36}
        />
      ) : (
        <Image
          src={"/icon-light.png"}
          alt={"icon-light-mode"}
          width={36}
          height={36}
        />
      )}
    </button>
  );
}
