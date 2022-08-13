import { ComponentMeta, ComponentStory } from '@storybook/react';
import GitHubTokenCard, { IGitHubTokenCard } from './GitHubTokenCard';

export default {
  title: 'Commits/Organisms/GitHubTokenCard',
  component: GitHubTokenCard
} as ComponentMeta<typeof GitHubTokenCard>;

const Template: ComponentStory<typeof GitHubTokenCard> = (args: IGitHubTokenCard) => (
  <GitHubTokenCard {...args} />
);

export const Default = Template.bind({});
