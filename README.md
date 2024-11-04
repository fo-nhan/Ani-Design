# Welcome to ANI DESIGN ⚡️

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

- Works out of the box. Ani Design contains a set of polished React components
  that work out of the box.

- Flexible & composable. Ani Design components are built on top of a React UI
  Primitive for endless composability.

- Accessible. Ani Design components follows the WAI-ARIA guidelines
  specifications.

- Dark Mode 😍: All components are dark mode compatible.

## Looking for the documentation?

https://ui.ani2am.me/

## Jointly develop the project

https://github.com/fo-nhan/Ani-Design

## Installing Ani Design

⚡️ANI DESIGN is made up of multiple components and tools which you can import
one by one. All you need to do is install the `@anidesign` package:

```sh
$ yarn add anidesign
# or
$ npm install --save anidesign
```

## Getting set up

To start using the components, please follow these steps:

1. Wrap your application in a `ThemeProvider` provided by **anidesign**

```jsx
import { ThemeProvider } from "anidesign";

const App = ({ children }) => (
  <ThemeProvider>
    <div>{children}</div>
  </ThemeProvider>
);
```

1. Import `styles` provided by **anidesign**

```jsx
import "anidesign/src/styles/config.css";

const App = ({ children }) => (
  <ThemeProvider>
    <div>{children}</div>
  </ThemeProvider>
);
```

1. Now you can start using components like so!:

```jsx
import { Button } from "anidesign";

const App = () => <Button>I just consumed some ANI DESIGN!</Button>;
```
