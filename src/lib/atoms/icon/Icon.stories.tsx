import { ComponentMeta, ComponentStory } from '@storybook/react';
import icon from './assets/github-logo.png';
import Icon, { IIcon } from './Icon';

export default {
  title: 'Library/Atoms/Icon',
  component: Icon,
  args: {
    src: icon,
    alt: 'An icon!'
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IIcon) => <Icon {...args} />;

export const Default = Template.bind({});
