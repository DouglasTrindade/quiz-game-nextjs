import shuffle from "../../../functions/arrays";
import questions from "../questions-base";

const quiz = (req, res) => {
  const ids = questions.map(question => question.id)
  res.status(200).json(shuffle(ids))
}

export default quiz
