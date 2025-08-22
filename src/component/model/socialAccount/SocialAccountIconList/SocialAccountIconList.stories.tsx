import type { Meta, StoryObj } from "@storybook/nextjs";

import { SocialAccountIconList } from "./SocialAccountIconList";

import { socialAccounts } from "~/data/socialAccount";

const meta: Meta<typeof SocialAccountIconList> = {
  component: SocialAccountIconList,
};

export default meta;

type Story = StoryObj<typeof SocialAccountIconList>;

export const Default: Story = {
  args: {
    socialAccounts,
  },
};
