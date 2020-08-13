import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = Big(0);
  const operandOne = Big(numberOne);
  let operandTwo = null;
  if (numberTwo) {
    operandTwo = Big(numberTwo);
  }
  switch (operation) {
    case '%':
      result = operandOne.times(0.01);
      break;
    case '+':
      result = operandOne.plus(operandTwo);
      break;
    case '-':
      result = operandOne.minus(operandTwo);
      break;
    case 'x':
      result = operandOne.times(operandTwo);
      break;
    case '÷':
      try {
        result = operandOne.div(operandTwo);
      } catch (e) {
        // alert('No division by zero or something went wrong with your math');
        result = null;
      }
      break;
    default:
  }
  return result ? result.toString() : 'No division by zero';
};

export default operate;
