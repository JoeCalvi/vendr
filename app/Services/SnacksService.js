import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";

class SnacksService {


    getMoney(){
        appState.money += .25
        console.log(appState.money);
    }
}

export const snacksService = new SnacksService()