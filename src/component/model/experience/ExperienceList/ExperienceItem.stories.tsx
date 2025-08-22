import type { Meta, StoryObj } from "@storybook/nextjs";

import { ExperienceItem } from "./ExperienceItem";

import { experiences } from "~/data/experience";

const meta: Meta<typeof ExperienceItem> = {
  component: ExperienceItem,
};

export default meta;

type Story = StoryObj<typeof ExperienceItem>;

export const Default: Story = {
  args: {
    experience: experiences[0],
  },
};
