import Shuffle from "../../../functions/arrays";
import questions from "../questions-base";

const Quiz = (req, res) => {
  const ids = questions.map(question => question.id)
  res.status(200).json(Shuffle(ids))
}

export default Quiz
