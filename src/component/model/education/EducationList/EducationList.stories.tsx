import type { Meta, StoryObj } from "@storybook/nextjs";

import { EducationList } from "./EducationList";

import { educations } from "~/data/education";

const meta: Meta<typeof EducationList> = {
  component: EducationList,
};

export default meta;

type Story = StoryObj<typeof EducationList>;

export const Default: Story = {
  args: {
    educations,
  },
};
