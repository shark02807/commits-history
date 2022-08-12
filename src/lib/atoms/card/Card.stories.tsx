import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card, { ICard } from './Card';

export default {
  title: 'Library/Atoms/Card',
  component: Card,
  args: {
    children: 'Hello world'
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: ICard) => <Card {...args} />;

export const Default = Template.bind({});
