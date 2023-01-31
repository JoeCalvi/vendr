import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snack.js"



class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  snacks = [
    new Snack(
      {
        name: 'Chips',
        price: 1.50,
        imgUrl: 'https://m.media-amazon.com/images/I/813axPlVxBL.jpg'
      }
    ),
    new Snack(
      {
        name: 'Cheez-Its',
        price: 2,
        imgUrl: 'https://content.etilize.com/Maximum/1010042087.jpg'
      }
    ),
    new Snack(
      {
        name: 'Protein Bar',
        price: 2,
        imgUrl: 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_06c1c9f4-42e9-4c31-9f65-33aebdb48135.png'
      }
    ),
    new Snack(
      {
        name: 'Beef Jerky',
        price: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/81MK4YmOTgL.jpg'
      }
    ),
    new Snack(
      {
        name: 'Hot Cheetos',
        price: 1.50,
        imgUrl: 'https://m.media-amazon.com/images/I/91pNe+nkT1L.jpg'
      }
    ),
    new Snack(
      {
        name: 'Skittles',
        price: 1,
        imgUrl: 'https://s7d6.scene7.com/is/image/bjs/281821?$bjs-Initial350$'
      }
    ),
    new Snack(
      {
        name: 'Pretzels',
        price: 2,
        imgUrl: 'https://i5.walmartimages.com/asr/20537216-b9dc-433a-a5ff-b35a55a7a417.3f9fa7719745daf19e40bd140e140df8.jpeg'
      }
    ),
    new Snack(
      {
        name: 'M&Ms',
        price: 1,
        imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000121397?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'
      }
    ),
    new Snack(
      {
        name: 'Popcorn',
        price: 2,
        imgUrl: 'https://cdn.shopify.com/s/files/1/2804/5352/products/02302_6.5oz_UTZBUTTERPOPCORNBAG_FRONT.jpg?v=1614202711'
      }
    ),
  ]

  money = 0


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
