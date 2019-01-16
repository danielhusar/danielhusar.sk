---
slug: 'progressively-upgrading-react-in-your-app'
date: '2018-12-30'
title: 'Progressively upgrading React in your app'
categories: ['en']
banner: null
draft: false
---

## Upgrading React means upgrading one of the most critical dependencies of your app.

Even if all your unit and integration tests pass, you will probably not feel comfortable shipping major upgrade of React to all customers at once.

If you are using Webpack and Yarn, you can create two bundles of your app with different React version and test upgraded React only for the small percentage of your customers.

If your package.json looks like this:

```json
{
  "dependencies": {
    "react": "15.6.2",
    "react-dom": "15.6.2"
  }
}
```

You can install next React version together with your current with Yarn aliases:

```json!package.json
{
  "dependencies": {
    "react": "15.6.2",
    "react-16": "npm:react@16.7.0",
    "react-dom": "15.6.2",
    "react-dom-16": "npm:react-dom@16.7.0"
  }
}
```

Now you can use `import React from 'react-16'` to import the upgraded version of React. You can automate it with Webpack resolve alias.

A simplified version of Webpack config might look like:

```js!webpack.config.js
module.exports = {
  entry: {
    main: ['./app/index.js'],
  },
};
```

Webpack supports both single config export or exporting an array of configs.
Using resolve alias for another entry, we can create two bundles of the same app with different React version:

```js!webpack.config.js
const config = {
  entry: {
    main: ['./app/index.js'],
  },
};

module.exports = [
  config,
  {
    ...config,
    entry: {
      main_react_16: ['./app/index.js'],
    },
    resolve: {
      alias: {
        react: 'react-16',
        'react-dom': 'react-dom-16',
      },
    },
  },
];
```

The config above will create a new `main_react_16` bundle with React 16 in addition to our original `main` bundle, with both bundles being in sync every time you deploy a new version of your app.

If you are using error tracking software like [Sentry](https://sentry.io), you can also add a tag with React version to each event:

```js
Sentry.configureScope(scope => {
  scope.setTag('react.version', React.version);
});
```

While React is my framework of choice, you could use the same approach for Ember, Angular, Vue or any NPM library.
