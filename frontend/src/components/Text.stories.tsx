import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Text, { Props } from "./Text";

export default {
  title: "components/Text",
  component: Text,
} as Meta;

const Template: Story<Props> = (args) => (
  <Text {...args} />
);

export const TextDefault = Template.bind({});
TextDefault.args = {
  title: "TextDefault",
  content: "This is content.",
} as Props;
