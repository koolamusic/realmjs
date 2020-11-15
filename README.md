# use-realm

Manage state in your react app using realms that can be shared within components, this is a small utilily library that enables you share state within your apps without the heavy lifting of reducers, context and other complex state management libraries, `use-realm` is **WIP** and best used within small projects.

---

## Install

`yarn add use-realm`

## How to use

Use realm exposes a simple API, where you can utilize `useRealm` and `createRealm` to share state values across your components.

- _useRealm_, manages the values within the realm that needs to be tracked.
- _createRealm_, is an utility method that exposes a react hook which handles **reading** the values within a realm and **dispatching** actions within that realm. There are no restrictions to how many components that are allowed to dispatch actions within a realm at a given point in time, however it's advisable to only dispatch from a single source and share values across multiple components.

Here is a simple example

```js
/* constants.js
This can be any file within your components directory */
export const COUNTER = createRealm(0);
```

```jsx
import React from 'react';
import { createRealm, useRealm } from 'use-realm';
import { COUNTER } from './constants';

export default function App() {
  const [state, setState] = useRealm(COUNTER);
  return (
    <React.Fragment>
      <h2>Use Realm Example</h2>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>+</button>
      <button onClick={() => setState(state - 1)} disabled={state === 0}>
        -
      </button>
    </React.Fragment>
  );
}
```

## Todo

- [ ] Use Many Realms to compose multiple realms (cookbook)
- [ ] Documentation Site to document `props, cookbooks and examples`
