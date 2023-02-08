import shuffle from "../functions/arrays";
import ModelAnswer from "./answer";

export default class ModelQuestion {
  answerWith(indice: number): import("react").SetStateAction<ModelQuestion> {
    throw new Error("Method not implemented.");
  }
  #id: number
  #enunciation: string
  #answers: ModelAnswer[]
  #hit: boolean
  // #answered: boolean

  constructor(id: number, enunciation: string, answers: any[], hit = false) {
    this.#id = id
    this.#enunciation = enunciation
    this.#answers = answers
    this.#hit = hit
  }

  get id() {
    return this.#id
  }

  get enunciation() {
    return this.#enunciation
  }

  get answers() {
    return this.#answers
  }

  get hit() {
    return this.#hit
  }

  get notAnswered() {
      return !this.answered
  }

  get answered() {
    // FIXME: implement this method
    for(let answer of this.#answers) {
      if(answer.revealed) return true
    }

    return false
  }

  withAnswer = (indice: number): ModelQuestion => {
    const hit = this.#answers[indice]?.such
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = indice === i
      const mustReveal = selectedAnswer || answer.such
      return mustReveal ? answer.reveal() : answer
    })
    return new ModelQuestion(this.id, this.enunciation, answers, hit)
  }

  answersShuffle(): ModelQuestion {
    let shuffledAnswers = shuffle(this.#answers)
    return new ModelQuestion(this.#id, this.#enunciation, shuffledAnswers, this.#hit)
  }

  toObject() {
    return {
      id: this.#id,
      enunciation: this.#enunciation,
      answers: this.#answers.map(resp => resp.toObject()),
      answered: this.answered,
      hit: this.#hit
    }
  }
}