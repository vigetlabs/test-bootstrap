# Test Bootstrap

[![Build Status](https://travis-ci.org/vigetlabs/test-bootstrap.png?branch=master)](https://travis-ci.org/vigetlabs/test-bootstrap)

A simple example project for writing tests.

To run tests, enter the following commend:

```javascript
npm test
```

This will execute the [Jest](http://facebook.github.io/jest/) command line interface and scan the project for `__test__` directories.

## `npm test` ?

The test command is configured in the `scripts` property of `package.json`. `npm test` will execute the command configured for the `test` attribute of this property. For this project, that command is simply `jest`.

`npm test`, and `npm run {x}` in general is a fantastic way to run node based tasks. When activated, `npm` will use local dependencies for any global command line tools (such as `gulp`, `grunt`, or `browserify`). This means you don't have to globally install anything on your integration server.

## Writing new tests

Jest scans for folders matching `__test__`. This is particularly useful because it allows you to write tests that are local to given scripts. This is really handy for CommonJS.

When adding a new test, create a new file within one of these directories matching the pattern: `*-test.js`.

## But I have DOM manipulation!

Jest gives each test its own unique DOM! It uses [jsdom](https://github.com/tmpvar/jsdom) under the hood to accomplish this.

## But I write CoffeeScript!

Check out Jest's instructions for precompilation before running tests:

http://facebook.github.io/jest/docs/tutorial-coffeescript.html#content

## How do I configure Travis CLI?

Build settings for Travis CLI are configured in a `.travis.yml` file at the root of a project. For Viget, we use Travis for open source projects (it's free and super cool).

## But what about Jenkins?

Ask a backend-dev about adding the following to the `.jenkins/build.sh` configuration file of your project:

```
npm install -d
npm test
```

## Why Jest?

[I](https://github.com/nhunzaker/) like Jest because it does a good job of isolating tests. Each test gets its own DOM and module system. This is super handy for writing unit tests. Also, because modules must be unmocked by default, it helps to expose dependencies very clearly.
