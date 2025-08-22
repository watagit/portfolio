import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectItem } from "./ProjectItem";

import { projects } from "~/data/project";

const meta: Meta<typeof ProjectItem> = {
  component: ProjectItem,
};

export default meta;

type Story = StoryObj<typeof ProjectItem>;

export const Default: Story = {
  args: {
    project: projects[0],
  },
};
