import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DefaultButton from './DefaultButton';

export default {
  title: 'Example/DefaultButton',
  component: DefaultButton,
} as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = () => <DefaultButton />;

export const Default = Template.bind({});
