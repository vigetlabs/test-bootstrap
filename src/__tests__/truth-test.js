jest.dontMock('../truth');

describe('Truth', function() {

  var truth = require('../truth');

  it ('returns true', function() {
    expect(truth()).toEqual(true);
  });

});
