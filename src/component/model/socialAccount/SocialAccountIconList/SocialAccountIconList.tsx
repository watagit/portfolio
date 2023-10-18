import { type FC } from "react";

import { SocialAccountIconItem } from "./SocialAccountIconItem";
import { styles } from "./style.css";

import { type SocialAccount } from "~/domain/socialAccount";

type SocialAccountIconListProps = {
  socialAccounts: Array<SocialAccount>;
};

export const SocialAccountIconList: FC<SocialAccountIconListProps> = ({
  socialAccounts,
}) => {
  return (
    <ul className={styles.container}>
      {socialAccounts.map((socialAccount) => (
        <li key={socialAccount.id}>
          <SocialAccountIconItem socialAccount={socialAccount} />
        </li>
      ))}
    </ul>
  );
};
