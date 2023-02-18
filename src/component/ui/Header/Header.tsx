import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export const Header: FC = () => {
  const avatarImage = "/avatar.png";

  return (
    <header className="p-3 sm:mx-auto sm:w-7/12">
      <Link className="inline-flex items-center gap-3" href="/">
        <Image
          className="h-16 w-16 rounded-full"
          src={avatarImage}
          priority
          width={100}
          height={100}
          alt="ロゴ画像"
        />
        <h1 className="text-lg text-black">what_a_pon&apos;s blog</h1>
      </Link>
    </header>
  );
};
