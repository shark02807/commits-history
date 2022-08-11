import { Octokit } from '@octokit/core';
import { createCommit, Commit, CommitResponse } from '../model/commit';

const DEFAULT_OWNER = 'shark02807';
const DEFAULT_REPO = 'commits-history';

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

export interface IGitHubService {
  /**
   * Requests the server to load commits by owner and repo.
   * @returns The list of Commits.
   */
  // eslint-disable-next-line
  loadCommits(owner: string, repo: string): Promise<Commit[]>;
}

const loadCommits = async (
  owner: string = DEFAULT_OWNER,
  repo: string = DEFAULT_REPO
): Promise<Commit[]> => {
  const response = await octokit.request(`GET /repos/${owner}/${repo}/commits`, {
    owner,
    repo
  });

  const commits = response?.data?.map((commit: CommitResponse) => createCommit(commit));

  return commits;
};

export default {
  loadCommits
} as IGitHubService;
