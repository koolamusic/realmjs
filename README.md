[![Build Status][build-shield]][build-url]
[![npm][npm-shield]][npm-url]
[![npm downloads][npm-dl-shield]][npm-dl-url]
[![Contributors][contributors-shield]][contributors-url]
[![Apache 2.0 License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/kpilens/rjsf-chakra-ui">
    <img src="./logo.png" alt="Logo" width="240">
  </a>

  <h3 align="center">@kpilens/rjsf-chakra-ui</h3>

  <p align="center">
  Chakra UI theme, fields and widgets for <a href="https://github.com/rjsf-team/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <br />
    <a href="https://react-jsonschema-form.readthedocs.io/en/latest/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rjsf-team.github.io/react-jsonschema-form/">View Playground</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Report Bug</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Linking in Monorepo](#linking-in-monorepo)

<!-- ABOUT THE PROJECT -->

## About The Project

[![@rjsf/chakra-ui Screen Shot][product-screenshot]](https://rjsf-team.github.io/@rjsf/chakra-ui)

Exports `chakra-ui` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form/)
- [Chakra UI](https://chakra-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- `@chakra-ui/core >= 1.0.0`
- `react >= 16.0.0`
- `@rjsf/core >= 2.0.0`

```bash
yarn add @chakra-ui/core@next
```

### Installation

```bash
yarn add @kpilens/rsjf-chakra-ui @rsjf/core
```

<!-- USAGE EXAMPLES -->

## Usage

```js
import Form from '@kpilens/rjsf-chakra-ui';
```

or

```js
import { withTheme } from '@rjsf/core';
import { Theme as ChakraUITheme } from '@kpilens/rjsf-chakra-ui';

// Make modifications to the theme with your own fields and widgets

const Form = withTheme(ChakraUITheme);
```

<!-- ROADMAP -->

## Linking in Monorepo

`package.json` main script refers to `dist/index.js` and as such this project has to be built before it can be used as a module in other packages. This can work if we embrace story book for component design and development, else the `main` script entry point can be modified to point to the `src/index.tsx` file directly as the reference module.
