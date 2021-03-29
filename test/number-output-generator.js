const { NumberOutputGenerator } = require('../src/number-output-generator');
const { assert } = require('chai');

describe('number-output-generator.js', function() {
  it ('calculate output for invalid input', function () {
    try {
      NumberOutputGenerator.generate('invalid-input');
      assert.fail('You shall not pass');
    } catch (e) {
      assert.equal(e.message, "Empty/invalid input", "['Invalid input should throw an error]");
    }
  }); 

  it('calculate output for valid input', function() {
    //Arrange
    const expectedOutput = [
      'Visual Nuts',
      1,
      2,
      'Visual',
      4,
      'Nuts',
      'Visual',
      7,
      8,
      'Visual',
      'Nuts',
      11,
      'Visual',
      13,
      14,
      'Visual Nuts',
      16,
      17,
      'Visual',
      19
    ];

    //Act
    const result = NumberOutputGenerator.generate(20);

    //Assert
    assert.equal(result.length, 20, "[Output needs to be 20 in length]");
    assert.deepEqual(result, expectedOutput, "[Output needs to match " + JSON.stringify(expectedOutput) + "]");
  });
});
