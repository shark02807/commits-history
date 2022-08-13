import { ComponentMeta, ComponentStory } from '@storybook/react';
import Profile, { IProfile } from './Profile';

export default {
  title: 'Library/Atoms/Profile',
  component: Profile,
  args: {
    src: 'https://picsum.photos/64?random=2'
  }
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args: IProfile) => <Profile {...args} />;

export const Default = Template.bind({});
