

export class Snack {

    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get SnackTemplate() {
        return `
    <div class="col-4 text-center pt-5">
        <div>
            <img src="${this.imgUrl}" class="border rounded" onclick="app.moneyController.spendMoney('${this.name}')">
                <h6 class="pt-3">${this.name}</h6>
                <h6>$${this.price}</h6>
        </div>
    </div>
        `
    }

}