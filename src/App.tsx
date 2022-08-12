import React from 'react';
import CommitApp from './commits/CommitsApp';
import MainTemplate from './templates/MainTemplate';

// Context
import { AccessTokenContextProvider } from './context/AccessToken';
import { RepositoryContextProvider } from './context/Repository';

// Services
import sessionStorageService from './service/session-storage';

interface IProviders {
  children: React.ReactNode;
}

function Providers({ children }: IProviders) {
  return (
    <AccessTokenContextProvider sessionStorageService={sessionStorageService}>
      <RepositoryContextProvider>{children}</RepositoryContextProvider>
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
