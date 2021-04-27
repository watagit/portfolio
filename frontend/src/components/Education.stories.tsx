import React from 'react';
import { Story, Meta } from '@storybook/react';

import Education, { Props } from './Education';

export default {
  title: 'Education',
  component: Education,
} as Meta;

const Template: Story<Props> = (args) => <Education {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: '山口大学工学部知能情報工学科',
  period: 'Apr 2020 - Present',
} as Props;
