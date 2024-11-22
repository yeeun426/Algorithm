import { Console } from "@woowacourse/mission-utils";
import { CALC_ERROR, CALC_INPUT } from "../Constants/Constants";

class InputView {
  static async getStringInput() {
    const string = await Console.readLineAsync(CALC_INPUT.SUM_STRING_INPUT);
    this.inputEmptyValid(string);
    return string;
  }

  static inputEmptyValid(string) {
    if (string !== "" && string.trim() === "") {
      throw new Error(CALC_ERROR.CALC_INPUT_ERROR);
    }
  }
}

export default InputView;
