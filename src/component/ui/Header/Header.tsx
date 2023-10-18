import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import { styles } from "./style.css";

import { SocialAccountIconList } from "~/component/model/socialAccount/SocialAccountIconList";
import { socialAccounts } from "~/data/socialAccount";

export const Header: FC = () => {
  const avatarImage = "/avatar.png";

  return (
    <header className={styles.container}>
      <Link className={styles.avatarContainer} href="/">
        <Image
          className={styles.avatar}
          src={avatarImage}
          priority
          width={100}
          height={100}
          alt="ロゴ画像"
        />
        <p className={styles.title}>what_a_pon</p>
      </Link>
      <SocialAccountIconList socialAccounts={socialAccounts} />
    </header>
  );
};
