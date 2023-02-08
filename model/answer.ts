export default class ModelAnswer {
  #value: string
  #such: boolean
  #revealed: boolean

  constructor(value: string, such: boolean, revealed = false) {
    this.#value = value
    this.#such = such
    this.#revealed = revealed
  }

  static such(value: string) {
    return new ModelAnswer(value, true)
  }

  static wrong(value: string) {
    return new ModelAnswer(value, false)
  }

  get value() {
    return this.#value
  }

  get such() {
    return this.#such
  }

  get revealed() {
    return this.#revealed
  }

  reveal() {
    return new ModelAnswer(this.#value, this.#such, true)
  }

  toObject() {
    return {
      value: this.#value,
      such: this.#such,
      revealed: this.#revealed
    }
  }
}