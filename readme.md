# Test Bootstrap

[![Build Status](https://travis-ci.org/vigetlabs/test-bootstrap.png?branch=master)](https://travis-ci.org/vigetlabs/test-bootstrap)

A simple example project for writing tests.

To run tests, enter the following commend:

```javascript
npm test
```

This will execute the [Jest](http://facebook.github.io/jest/) command line interface and scan the project for `__test__` directories. `npm test` is a fantastic way to run tests on any integration server, as it will use local dependencies for any global command line tools.

## Writing new JavaScript tests

Jest scans for folders matching `__test__`. This is particularly useful because it allows you to write tests that are local to given scripts. When adding a new test, create a new file within one of these directories matching the pattern: `*-test.js`.

## Accessibility testing

Though no substitute for human testing, this project uses [pa11y](https://github.com/nature/pa11y), a fantastic tool for automated accessibility testing. You can run it with:

```
npm run test:accessibility
```

This will run `pa11y` on `index.html`. It will fail, for demonstration purposes.

## But I write CoffeeScript!

Check out Jest's instructions for precompilation before running tests:

http://facebook.github.io/jest/docs/tutorial-coffeescript.html#content

## How do I configure Travis CLI?

Build settings for Travis CLI are configured in a `.travis.yml` file at the root of a project. For Viget, we use Travis for open source projects (it's free and super cool).

## But what about Jenkins?

Ask a backend-dev about adding `npm test` to the `.jenkins/build.sh` configuration file of your project.
