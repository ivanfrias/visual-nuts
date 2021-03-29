class OutputResult {
  static valueOf(number) {
    const divisibleByThree = number % 3 === 0;
    const divisibleByFive = number % 5 === 0;
    
    if (divisibleByThree && divisibleByFive) return 'Visual Nuts';
    if (divisibleByThree) return 'Visual';
    if (divisibleByFive) return 'Nuts';

    return number;
  }
}

module.exports = { OutputResult };

