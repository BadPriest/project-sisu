# SIEVO ASSIGNMENT

## Project Sisu | be excellent.

This project is the fulfillment of an assignment for Sievo's recruitment process.

# Summary

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Install & Run](#install-and-run)
- [Running Tests](#running-tests)
- [Author](#author)

## Features

- Lists Projects' Savings Data
- Searches Projects' Savings Data
  - Scalable and extensible search
  - Can search by any field present in the model
  - Can receive custom filter function
  - Generalized to work with any given collection
- Sorts Projects' Savings Data
  - Scalable and extensible sorting
  - Bidirectional and prop-based
  - Displays sort by "Start Date" and "Savings Amount" (could display by any prop)
  - Generalized to work with any given collection
- Wide array of Shared components, hooks and functions built to maximize reusability
- Theming (app colors and other variables)
- Responsive design: works well on screens from narrow phones to wide desktops

## Technologies

### [React](https://reactjs.org/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Suspense (Experimental)](https://reactjs.org/docs/concurrent-mode-suspense.html)
- [Use Fetch](https://github.com/ava/use-http)

### Styling

- [Styled Components](https://styled-components.com/)
- Icons: [FontAwesome](https://fontawesome.com/)

### Testing

- [Jest](https://jestjs.io/)
- [Render Hook](https://github.com/testing-library/react-hooks-testing-library)

### Project Support

- Linter: [ESLint](https://eslint.org/)
- Formatter: [Prettier](https://prettier.io/)
- Project hooks: [Husky](https://typicode.github.io/husky/#/)
- Commits: [Commitizen](https://commitizen-tools.github.io/commitizen/)

## Project Structure

```

project-sisu
└── src
    ├── Core
    │     ├── Api
    │     │    └── endpoints
    │     ├── Localization
    │     │    └── i18n keys
    │     ├── Theme
    │     │    └── color presets
    │     │    └── theming component
    │     ├── ViewTemplate
    │     │    └── Header, Content & Footer structures
    │     └── App.jsx
    │     └── App.test.jsx
    │     └── styles.jsx
    ├── View
    │     ├── Feature/Business Components
    │     ├── Shared/Generic Components
    ├── Assets
    │     └── Fonts
    │     └── Icons
    ├── Utils
    │     ├── TestFixtures
    │     └── utility functions (parsers)
    ├── index.css
    └── index.jsx


```

## Requirements

- To execute the application you`ll need to download and install [NodeJs](https://nodejs.org/en/download/)
- To open the zipped folder you may need [7zip](https://www.7-zip.org/)

## Install and Run

1. Download the zipped project folder at

```
https://drive.google.com/drive/folders/1Aw0mL9--qjN5mwrAaYemgmxkXX_hPHRZ?usp=sharing
```

2. Unzip the folder, then

3. In the root folder, run

```
$ npm install
```

3. Start the application in development mode

```
$ npm start
```

4. To see the app running, open your browser and navigate to [localhost:3000](localhost:3000)

```
Alternatively, you could build with `npm run build` and deploy it on your server of choice.
```

### Running tests

To run all tests, go to the root folder and run:

```
$ npm run test
```

Alternatively, you could pass a filename as the second parameter. That would execute only the files it finds in the given folder.

```
$ npm test src\View\Shared\Hooks\useSortCollection.test.jsx
```

or even

```
$ npm test src\View\Shared\Hooks\*
```

### Author

**Bruno Vinicius Vergatti**

Passionate about knowledge, collaboration, communication and craftsmanship.

[LinkedIn](https://www.linkedin.com/in/bruno-vinicius-vergatti-3b631266)
