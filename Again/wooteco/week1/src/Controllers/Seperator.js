import { CALC_ERROR } from "../Constants/Constants.js";
import Calculator from "./Calculator.js";

class Separator {
  static checkCustomDelimiter(input) {
    let delimiters = [",", ":"];
    let expression = input.trim();

    if (expression.startsWith("//") && expression.includes("\\n")) {
      const { customDelimiter, newExpression } =
        this.findExpression(expression);
      delimiters.push(customDelimiter);
      expression = newExpression;
    }
    const result = Calculator.calculateSum(expression, delimiters);

    return result;
  }

  static findExpression(str) {
    const endOfCustomDelimiter = str.indexOf("\\n");
    if (endOfCustomDelimiter === -1) {
      throw new Error(CALC_ERROR.IS_STRING_ERROR);
    }
    const customDelimiter = str.substring(2, endOfCustomDelimiter);
    const newExpression = str.substring(endOfCustomDelimiter + 2);
    return { customDelimiter, newExpression };
  }
}

export default Separator;
