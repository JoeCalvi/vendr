import { appState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";
import { Pop } from "../Utils/Pop.js";
import { saveState } from "../Utils/Store.js";

class SnacksService {


    getMoney() {
        appState.money += .25
        console.log(appState.money);
    }

    spendMoney(name) {
        let snack = appState.snacks.find(snack => snack.name == name)
        if (snack.price > appState.money) {
            Pop.toast("You don't have enough money.", 'warning', 'center', 3000, true)
        } else {
            appState.money -= snack.price
            console.log(appState.money)
        }

    }
}

export const snacksService = new SnacksService()