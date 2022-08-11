import React from 'react';
import { GitHubContextProvider } from './context/GitHub';
import gitHubService from './service/github';
import CommitApp from './commits/CommitsApp';
import MainTemplate from './templates/MainTemplate';

interface IProviders {
  children: React.ReactNode;
}

function Providers({ children }: IProviders) {
  return <GitHubContextProvider gitHubService={gitHubService}>{children}</GitHubContextProvider>;
}

function App() {
  return (
    <Providers>
      <MainTemplate>
        <CommitApp />
      </MainTemplate>
    </Providers>
  );
}

export default App;
