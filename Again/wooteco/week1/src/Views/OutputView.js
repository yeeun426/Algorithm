import { Console } from "@woowacourse/mission-utils";
import { CALC_OUTPUT } from "../Constants/Constants";

class OutputView {
  static printAnswer(answer) {
    Console.print(CALC_OUTPUT.RESULT_OUTPUT(answer));
  }
}

export default OutputView;
