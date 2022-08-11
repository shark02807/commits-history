import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButton } from './Button';
import { ButtonType } from './Button.types';

export default {
  title: 'Library/Atoms/Button',
  component: Button,
  args: {
    children: 'Hello world'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButton) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: ButtonType.Default
};

export const Filled = Template.bind({});
Filled.args = {
  type: ButtonType.Filled
};

export const Text = Template.bind({});
Text.args = {
  type: ButtonType.Text
};
