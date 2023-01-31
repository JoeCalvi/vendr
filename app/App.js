import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnacksController.js"

class App {
  
  snacksController = new SnacksController()
  moneyController = new MoneyController()
}

window["app"] = new App();
