export type SocialAccount = {
  id: string;
  accountType: AccountType;
  url: string;
};

type AccountType = "x" | "github";
