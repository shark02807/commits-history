# Commits History

An application that shows the git commit history of the master (main) branch of the repository where the code is located.

## Public URL
[Commit History App](https://shark02807.github.io/commits-history/)

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Code check](#code-check)
- [Stacks](#stacks)
- [Tools](#tools)

## Installation

Clone the repository:

```
  $ git clone https://github.com/shark02807/commits-history.git
```

In the project directory, you can install dependencies:

```
  $ npm install
```

And run the app in the development mode:

```
  $ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## Usage

1. Type GitHub Access Token
2. Type GitHub repository credentials
3. Commits list will load after all inputs were filled

## Tests

To run test suites type the next command:

```
npm test
```

## Code check

To run linter check type the next command:

```
npm run lint
```

To run linter check with automatic fixing type the next command:

```
npm run lint:fix
```

To run Prettier check and formatting type the next command:

```
npm run format
```

## Stacks

- React
- Typescript
- PostCSS
- Tailwindcss
- [The GitHub REST API](https://docs.github.com/en/rest)

## Tools

Tools for development stage

- ESlint
- Prettier
- Husky pre-commit (with lint-staged)

## App domains

'CommitApp' - is the folder for 'commits' domain of the app. Here should be routes for separate pages such as: '/commits', '/commits/:commitSha'. 
It's assumed another domains of the app should be added later. For example, on same level as 'commits' folder, 'pull-requests' folder could be added with the same separate routes: '/pulls', '/pulls/:pullId'

## Structure

lib - folder for reusable components
lib/atoms - the smallest components, could be used as a bricks for bigger one. Atoms should not import any other component.
lib/molecules - could use composition of Atoms to render data
lib/organisms - could use composition of Molecules to render data. Could represents parts of pages.

{app_domain}/organisms - organisms from 'lib/organisms' with specific settings for certain domain of the app. For example: 'commits/organisms'.

## Browser Storage

As a storage for saving token SessionStorage is used. 

## App Storage

Storing data:
- github access token
- repository credentials
- commits from repository

React Context API is used to store data inside the app.
Due to small amount of data and no need to share data between components - Context is better for current purposes rather then any state management package. 
- No need to add additional dependency.
- Still possible to handle data inside the app using providers and consumers.
- Separate providers can be added to different app domains.

## Styling

For creating markup TailWindCss was chosen due to fast and easiest way to create suitable markup

## Tests

During the implementation a few tests were added.
For testing were used "@testing-library/react" package.

## Storybook

Also part of the components listed in the Storybook as an example how they could be rendered under different conditions.
