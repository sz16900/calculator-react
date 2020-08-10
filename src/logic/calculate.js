import operate from './operate.js';

const calculate = (dataObj, buttonName) => {
  const { total, next, operation } = dataObj;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '÷', 'x'];

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (numbers.includes(buttonName)) {
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (buttonName === '+/-' && !next && total) {
    return {
      total: (total * -1).toString(),
      next,
      operation,
    };
  }

  if (buttonName === '+/-' && next) {
    return {
      total,
      next: (next * -1).toString(),
      operation,
    };
  }

  //   Make sure '.' doesnt repeat
  if (buttonName === '.' && !next.includes('.') && next) {
    return {
      total,
      next: `${next}.`,
      operation,
    };
  }

  if (operations.includes(buttonName) && next && !total) {
    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  }

  if (operations.includes(buttonName) && !next && total) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (operations.includes(buttonName) && next && total) {
    return {
      total: operate(total, next, buttonName).toString(),
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName === '=' && next && total) {
    return {
      total: operate(total, next, operation).toString(),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '%' && next && total) {
    return {
      total: operate(total, next, buttonName),
      next: null,
      operation,
    };
  }

  if (buttonName === '%' && next && !total) {
    return {
      total: null,
      next: operate(next, 1, buttonName).toString(),
      operation: null,
    };
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
