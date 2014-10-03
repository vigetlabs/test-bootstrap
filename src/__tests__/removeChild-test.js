jest.dontMock('../removeElement');

describe('removeElement', function() {

  var removeElement = require('../removeElement');

  it ('removes children', function() {
    var element = document.createElement('p');

    document.body.appendChild(element);

    removeElement(element);

    expect(element.parentNode).not.toEqual(document.body);
  });

});
