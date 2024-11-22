import InputView from "./Views/InputView.js";
import OutputView from "./Views/OutputView.js";
import Seperator from "./Controllers/Seperator.js";

class App {
  async run() {
    const input = await InputView.getStringInput();
    const result = Seperator.checkCustomDelimiter(input);
    OutputView.printAnswer(result);
  }
}
export default App;
