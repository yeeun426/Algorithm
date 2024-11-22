import { CALC_ERROR } from "../Constants/Constants";

class calculate {
  static calculateSum(expression, delimiters) {
    const regExpOfDelimiter = new RegExp(`[${delimiters.join("")}]`);
    const numbers = expression.split(regExpOfDelimiter);
    let sum = 0;

    for (const number of numbers) {
      if (isNaN(number)) {
        throw new Error(CALC_ERROR.NAN_NUMBER_ERROR);
      } else if (Number(number) <= 0) {
        throw new Error(CALC_ERROR.POSITIVE_ERROR);
      } else {
        sum += Number(number);
      }
    }
    return sum;
  }
}

export default calculate;
