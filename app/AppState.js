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
        name: 'Sample', 
        price: 3.50, 
        imgUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sample',
        price: 3.50,
        imgUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sample',
        price: 3.50,
        imgUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sample',
        price: 3.50,
        imgUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sample',
        price: 3.50,
        imgUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sample',
        price: 3.50,
        imgUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sample',
        price: 3.50,
        imgUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sample',
        price: 3.50,
        imgUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sample',
        price: 3.50,
        imgUrl: 'https://via.placeholder.com/150'
      },
      )
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
