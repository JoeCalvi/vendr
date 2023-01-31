import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

// SECTION private functions below

function _drawSnacks(){
    let snacks = appState.snacks
    let template = ''

    snacks.forEach(snack => template += snack.SnackTemplate)
    setHTML('snacks', template)
}


export class SnacksController {
    constructor(){
        _drawSnacks()
        console.log('Controller is working', appState.snacks)
    }

    // SECTION public functions below
}