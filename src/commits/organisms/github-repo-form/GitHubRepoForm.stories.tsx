import { ComponentMeta, ComponentStory } from '@storybook/react';
import GitHubRepoForm, { IGitHubRepoForm } from './GitHubRepoForm';

export default {
  title: 'Commits/Organisms/GitHubRepoForm',
  component: GitHubRepoForm
} as ComponentMeta<typeof GitHubRepoForm>;

const Template: ComponentStory<typeof GitHubRepoForm> = (args: IGitHubRepoForm) => (
  <GitHubRepoForm {...args} />
);

export const Default = Template.bind({});
