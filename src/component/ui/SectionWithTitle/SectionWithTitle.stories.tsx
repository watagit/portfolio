import type { Meta, StoryObj } from "@storybook/nextjs";

import { SectionWithTitle } from "./SectionWithTitle";

const meta: Meta<typeof SectionWithTitle> = {
  component: SectionWithTitle,
};

export default meta;

type Story = StoryObj<typeof SectionWithTitle>;

export const Default: Story = {
  args: {
    title: "Experience",
    children: <p>経験一覧</p>,
  },
};
