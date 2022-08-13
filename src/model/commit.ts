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
    avatar_url: string;
  } | null;
}

export interface Commit {
  htmlUrl: string;
  sha: string;
  date: string;
  message: string;
  author: string;
  author_avatar: string;
}

export function createCommit(commitData: CommitResponse): Commit {
  const { html_url, sha, commit, author } = commitData;

  return {
    htmlUrl: html_url,
    sha,
    date: commit.author.date,
    message: commit.message,
    author: author?.login || '',
    author_avatar: author?.avatar_url || ''
  };
}
