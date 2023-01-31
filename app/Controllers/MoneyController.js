import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

// SECTION private functions below

function _drawMoney() {
    let template = ''
    let money = appState.money

    template += `<h5>Money: $${money}</h5>`

    setHTML('money', template)

}


export class MoneyController {
    constructor() {
        _drawMoney()

        appState.on('money', _drawMoney)
    }

    // SECTION public functions below

    getMoney() {
        snacksService.getMoney()
    }

    spendMoney(name) {
        snacksService.spendMoney(name)
    }
}