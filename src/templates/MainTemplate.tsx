import React from 'react';

interface IMainTemplate {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: IMainTemplate) => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <main className="flex flex-1 items-center w-full max-w-5xl m-auto px-5 lg:px-0">
        {children}
      </main>
    </div>
  );
};

export default MainTemplate;
