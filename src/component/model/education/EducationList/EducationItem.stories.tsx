import type { Meta, StoryObj } from "@storybook/react";

import { EducationItem } from "./EducationItem";

import { educations } from "~/data/education";

const meta: Meta<typeof EducationItem> = {
  component: EducationItem,
};

export default meta;

type Story = StoryObj<typeof EducationItem>;

export const Default: Story = {
  args: {
    education: educations[0],
  },
};
