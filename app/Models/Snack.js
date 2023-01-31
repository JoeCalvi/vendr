

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
            <img src="https://via.placeholder.com/150">
                <h6 class="pt-3">Snack Name</h6>
                <h6>Cost:</h6>
        </div>
    </div>
        `
    }
}