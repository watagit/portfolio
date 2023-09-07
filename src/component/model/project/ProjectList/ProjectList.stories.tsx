import type { Meta, StoryObj } from "@storybook/react";
import { ProjectList } from "./ProjectList";
import { projects } from "~/data/project";

const meta: Meta<typeof ProjectList> = {
  component: ProjectList,
};

export default meta;

type Story = StoryObj<typeof ProjectList>;

export const Default: Story = {
  args: {
    projects,
  },
};
