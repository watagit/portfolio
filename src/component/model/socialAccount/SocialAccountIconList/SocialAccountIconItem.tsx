import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

import { type SocialAccount } from "~/domain/socialAccount";

type SocialAccountIconItemProps = {
  socialAccount: SocialAccount;
};

export const SocialAccountIconItem: FC<SocialAccountIconItemProps> = ({
  socialAccount,
}) => {
  return (
    <Link href={socialAccount.url} target="_blank" rel="noopener noreferrer">
      <Image
        src={`/sns/${socialAccount.accountType}.svg`}
        alt={`icon for ${socialAccount.accountType}`}
        width={24}
        height={24}
      />
    </Link>
  );
};
