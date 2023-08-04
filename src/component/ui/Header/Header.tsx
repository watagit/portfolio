import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import { SocialAccountIconList } from "@/component/model/socialAccount/SocialAccountIconList";
import { socialAccounts } from "@/data/socialAccount";

export const Header: FC = () => {
  const avatarImage = "/avatar.png";

  return (
    <header className="mx-auto w-11/12 flex justify-between py-3 sm:w-2/3">
      <Link className="inline-flex items-center gap-3" href="/">
        <Image
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full"
          src={avatarImage}
          priority
          width={100}
          height={100}
          alt="ロゴ画像"
        />
        <p className="text-lg text-black">what_a_pon</p>
      </Link>
      <SocialAccountIconList socialAccounts={socialAccounts} />
    </header>
  );
};
