const { NumberOutputGenerator } = require('./number-output-generator');

const MAX = 100;

(function print () {
  console.log('Going to print 100 numbers...');
  const result = NumberOutputGenerator.generate(MAX);
  result.forEach(x => console.log(x));
  console.log('Done.');
})();