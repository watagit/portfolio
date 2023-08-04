import { type FC } from "react";

import { SocialAccountIconItem } from "./SocialAccountIconItem";

import { type SocialAccount } from "@/domain/socialAccount";

type SocialAccountIconListProps = {
  socialAccounts: Array<SocialAccount>;
};

export const SocialAccountIconList: FC<SocialAccountIconListProps> = ({
  socialAccounts,
}) => {
  return (
    <ul>
      {socialAccounts.map((socialAccount) => (
        <li key={socialAccount.id}>
          <SocialAccountIconItem socialAccount={socialAccount} />
        </li>
      ))}
    </ul>
  );
};
