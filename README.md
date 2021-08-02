# Create Lit Project

A Node.js project that runs a script based on options that the user selects to spin up a new project in either JavaScript or TypeScript.

## Starting the Project

`npm i`

`npm run start`

## Instructions to link this script locally as a node command

From within the root directory of this project, type `npm link` so that it can be recongized as a global install so you can use it. 

Once this command is run, go to the empty directory that you have created for your new project, and from inside that directory type `create-lit-project`. Answer the questions and the wizard will help you to choose options for your project.

## Snowpack

This project uses Snowpack by default to run the development server and to bundle the project for launch. Read more about [Snowpack ❄️](https://www.snowpack.dev/)

## Babel

Babel is used to provide access to things like [@property decorators](https://lit-element.polymer-project.org/api/modules/_lit_element_.html#property), [@customElement decorators](https://lit-element.polymer-project.org/api/modules/_lit_element_.html#customelement), and [@eventOptions](https://lit-element.polymer-project.org/api/modules/_lit_element_.html#eventoptions) which can help simplify project development. 👍

## ESLint
By default this project is set up to have [ESLint](https://eslint.org/) installed with a default set of rules that helps to maintain clean code. 🔴 **WARNING:** 🔴 ESLInt can break your code, even as it is improving readability and best coding standards. You can configure this as you see fit in the [🧰 tools directory](tools/.eslintrc.js).

>Note: it is recommended to use the `npm run lint` script to see if there are any linting errors in your code before you let the linter change lines of code with `format` commands.

## Prettier
By default this project is set up to have [Prettier](https://prettier.io/) installed with a default set of rules that helps to format pages. You can configure as you see fit.

## Husky, lint-staged, and commitlint
These products work together to ensure that commits are provided that have meaning in the format:
```
git commit -m "(chore): explanation of task that is accomplished with this commit"
``` 
as well as ensuring that ESLint and Prettier are run prior to each commit. If either of these scripts fail, the commit is not made. If you as a developer **must** commit and are not able to resolve ESLint or Prettier issues, you can run the commit command with the `-n` flag:
```
git commit -m "(chore): explanation of task that is accomplished with this commit" -n
```

## Routing
Routing is a typical need in most projects. The project gives instruction for developers to eliminate routing if they don't want or need it in their project.

## Scripts in this project

| Script Name     | Functionality |
|-----------------|---------------|
| format:eslint   | Makes changes to code based on ESLint rules |
| format:prettier | Makes changes to formatting based on Prettier rules |
| format          | Runs both format:eslint and format:prettier scripts |
| lint:eslint     | Runs a check that outputs which files have ESLint code rule violations |
| lint:prettier   | Runs a check that outputs which files have Prettier formatting rule violations |
| lint            | Runs both lint:eslint and lint:prettier scripts |
| test            | Placeholder for tests to be run |
| update          | Updates dependency packages. Different from the standard `npm update` since running `npm run update` will provide an output defining which dependencies have major, minor, or patch updates. It allows the developer to decide which updates they want to apply with an interactive option view in the CLI. |
