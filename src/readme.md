# Test Bootstrap

A simple example project for writing tests.

To run tests, enter the following commend:

```javascript
npm test
```

This will execute the [Jest](http://facebook.github.io/jest/) command line interface and scan the project for `__test__` directories.

## Writing new tests

Jest scans for folders matching `__test__`. This is particularly useful because it allows you to write tests that are local to given scripts. When adding a new test, create a new file within one of these directories matching the pattern: `*-test.js`.

## But I write CoffeeScript!

Check out Jest's instructions for precompilation before running tests:

http://facebook.github.io/jest/docs/tutorial-coffeescript.html#content
