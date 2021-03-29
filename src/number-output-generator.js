const { OutputResult } = require('./output-result');

class NumberOutputGenerator {
  static generate(numbers) {
    const output = [];
    console.log(typeof numbers);
    if (!numbers || (typeof numbers !== 'number')) throw new Error('Empty/invalid input');

    for ( let i = 0; i < numbers; i += 1 ) {
      output.push(OutputResult.valueOf(i));
    }

    return output;
  }
}

module.exports = { NumberOutputGenerator };