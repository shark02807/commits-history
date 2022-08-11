export interface CommitResponse {
  html_url: string;
  sha: string;
  commit: {
    author: {
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
  };
}

export interface Commit {
  htmlUrl: string;
  sha: string;
  date: string;
  message: string;
  author: string;
}

export function createCommit(commitData: CommitResponse): Commit {
  const { html_url, sha, commit, author } = commitData;

  return {
    htmlUrl: html_url,
    sha,
    date: commit.author.date,
    message: commit.message,
    author: author.login
  };
}
