import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = Big(0);
  const operandOne = Big(numberOne);
  let operandTwo = null;
  if (numberTwo) {
    operandTwo = Big(numberTwo);
  }
  switch (operation) {
    //   not sure about this, what if its just a number and a mod?
    case '%':
      result = operandOne.times(operandTwo).times(0.01);
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
      if (numberOne === 0 || numberTwo === 0) {
        result = 'Cannot divide by zero';
      } else {
        result = operandOne.div(operandTwo);
      }
      break;
    default:
  }
  return result.toString();
};

export default operate;
