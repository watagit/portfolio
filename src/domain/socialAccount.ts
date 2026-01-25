export type SocialAccount = {
  id: string;
  accountType: AccountType;
  url: string;
  size: number;
};

type AccountType = "x" | "github";
