[![Tests](https://github.com/FabienGreard/taleur/actions/workflows/tests.yml/badge.svg)](https://github.com/FabienGreard/taleur/actions/workflows/tests.yml)

# Taleur.io

Taleur.io is a free scheduling app, plan events and start organizing your next meetings, with synching everything on your agenda.

## Installation

Start by cloning this repositories then use either `yarn install` or `npm install` to download the dependencies.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

| Commands |          Info          |                                   Description |
| -------- | :--------------------: | --------------------------------------------: |
| dev      |        next dev        |                        Launch app in dev mode |
| build    |       next build       |              Build the app for production use |
| start    |       next start       |                         Launch app from build |
| format   |   prettier --write .   |                                Format project |
| lint     |     eslint --fix .     |                                  Lint project |
| test     |          jest          |                                   Launch test |
| coverage |    jest --coverage     |                 Generate a coverage from test |
| e2e      | cypress run --headless |                               Launch e2e test |
| prepare  |     husky install      | This is need from husky to set up the project |
| clear    | node scripts/clear.js  |                 clear node_modules and \*lock |

## Acknowledgement

This project is build with :

- [NextJs](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [react-intl](https://formatjs.io/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [husky](https://typicode.github.io/husky/#/)
- [commitlint](https://commitlint.js.org/#/)
- [vscode](https://code.visualstudio.com/)

## Git Commit Convention

Using [gitmoji](https://gitmoji.dev/) with the below types:

build
ci
docs
feat
fix
perf
refactor
revert
style
test
chore
wip

Given the [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) with [gitmoji](https://gitmoji.dev/) it goes like this :

```
:gitmoji:<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[GPL-3.0-only](https://choosealicense.com/licenses/gpl-3.0/)
