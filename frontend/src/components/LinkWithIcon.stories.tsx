import React from 'react';
import { Story, Meta } from '@storybook/react';
import Twemoji from 'react-twemoji';

import LinkWithIcon, { Props } from './LinkWithIcon';

export default {
  title: 'LinkWithIcon',
  component: LinkWithIcon,
} as Meta;

const Template: Story<Props> = (args) => <LinkWithIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Experience',
  icon: <Twemoji>💪</Twemoji>,
} as Props;
