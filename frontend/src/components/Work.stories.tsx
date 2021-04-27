import React from 'react';
import { Story, Meta } from '@storybook/react';

import Work, { Props } from './Work';

export default {
  title: 'Work',
  component: Work,
} as Meta;

const Template: Story<Props> = (args) => <Work {...args} />;

export const Default = Template.bind({});
export const Array = Template.bind({});

Default.args = {
  companyName: 'Crosshare, inc',
  role: 'フロントエンドエンジニア',
  period: 'Mar 2021 - Present',
} as Props;
