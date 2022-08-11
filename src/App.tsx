import React from 'react';
import CommitApp from './commits/CommitsApp';
import MainTemplate from './templates/MainTemplate';

// Context
import { GitHubContextProvider } from './context/GitHub';
import gitHubService from './service/github';
import { AccessTokenContextProvider } from './context/AccessToken';
import sessionStorageService from './service/session-storage';

interface IProviders {
  children: React.ReactNode;
}

function Providers({ children }: IProviders) {
  return (
    <AccessTokenContextProvider sessionStorageService={sessionStorageService}>
      <GitHubContextProvider gitHubService={gitHubService}>{children}</GitHubContextProvider>
    </AccessTokenContextProvider>
  );
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
