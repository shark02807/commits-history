import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputCard, { IInputCard } from './InputCard';

export default {
  title: 'Library/Molecules/InputCard',
  component: InputCard
} as ComponentMeta<typeof InputCard>;

const Template: ComponentStory<typeof InputCard> = (args: IInputCard) => <InputCard {...args} />;

export const Default = Template.bind({});
