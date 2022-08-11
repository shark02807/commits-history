import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input, { IInput } from './Input';

export default {
  title: 'Library/Atoms/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: IInput) => <Input {...args} />;

export const Default = Template.bind({});
