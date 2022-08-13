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
