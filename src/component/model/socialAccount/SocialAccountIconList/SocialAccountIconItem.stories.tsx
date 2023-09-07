import type { Meta, StoryObj } from "@storybook/react";

import { SocialAccountIconItem } from "./SocialAccountIconItem";

import { socialAccounts } from "~/data/socialAccount";

const meta: Meta<typeof SocialAccountIconItem> = {
  component: SocialAccountIconItem,
};

export default meta;

type Story = StoryObj<typeof SocialAccountIconItem>;

export const Default: Story = {
  args: {
    socialAccount: socialAccounts[0],
  },
};
