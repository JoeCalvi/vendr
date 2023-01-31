import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

// SECTION private functions below

function _drawMoney(){
    let template = ''

    template += snack.MoneyTemplate

    setHTML('money', template)
    
}


export class MoneyController {
    constructor() {

    }

    // SECTION public functions below

    getMoney(){
        snacksService.getMoney()
    }
}