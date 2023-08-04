import { type FC } from "react";
import { type SocialAccount } from "@/domain/socialAccount";

type SocialAccountIconItemProps = {
  socialAccount: SocialAccount;
};

export const SocialAccountIconItem: FC<SocialAccountIconItemProps> = ({
  socialAccount,
}) => {
  return <div>{socialAccount.url}</div>;
};
