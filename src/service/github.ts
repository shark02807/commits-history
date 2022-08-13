import { Octokit } from '@octokit/core';
import { createCommit, Commit, CommitResponse } from '../model/commit';
import { Repository } from '../context/Repository';

export interface IGitHubAPIService {
  /**
   * Requests the server to load commits by owner and repo.
   * @returns The list of Commits.
   */
  // eslint-disable-next-line
  loadCommits(repository: Repository): Promise<Commit[]>;
}

export default class GitHubAPIService implements IGitHubAPIService {
  private _authToken: string | null;

  private _octokit: Octokit;

  constructor(_authToken: string | null) {
    this._authToken = _authToken;
    this._octokit = new Octokit({
      auth: this._authToken
    });
  }

  public loadCommits = async (repository: Repository): Promise<Commit[]> => {
    const response = await this._octokit.request(
      `GET /repos/${repository.owner}/${repository.repo}/commits`,
      {
        owner: repository.owner,
        repo: repository.repo
      }
    );

    const commits = response?.data?.map((commit: CommitResponse) => createCommit(commit));

    return commits;
  };
}
