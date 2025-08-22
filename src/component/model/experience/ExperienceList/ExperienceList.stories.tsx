import type { Meta, StoryObj } from "@storybook/nextjs";

import { ExperienceList } from "./ExperienceList";

import { experiences } from "~/data/experience";

const meta: Meta<typeof ExperienceList> = {
  component: ExperienceList,
};

export default meta;

type Story = StoryObj<typeof ExperienceList>;

export const Default: Story = {
  args: {
    experiences,
  },
};
