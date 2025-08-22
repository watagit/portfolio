import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProfileHeading } from "./ProfileHeading";

const meta: Meta<typeof ProfileHeading> = {
  component: ProfileHeading,
};

export default meta;

type Story = StoryObj<typeof ProfileHeading>;

export const Default: Story = {};
