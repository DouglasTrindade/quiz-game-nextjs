import { useState } from "react";
import Question from "../components/Question/index";
import ModelAnswer from "../model/answer";
import ModelQuestion from "../model/question";
import questions from "./api/questions-base";
import Button from "../components/Button/index";
import Quiz from "../components/Quiz/index";

const mockQuestion = new ModelQuestion(1, 'Qual é a melhor cor?', [
  ModelAnswer.wrong('Verde'),
  ModelAnswer.wrong('vermelho'), 
  ModelAnswer.wrong('Azul'),
  ModelAnswer.such('Preto'),
])

const Home = () => {
  const [question, setQuestion] = useState(mockQuestion);

  const answerQuestion = (question: ModelQuestion) => {

  }

  const nextStep = () => {

  }

  return (
    <>
      <Quiz
        question={question}
        lastQuestion={false}
        answerQuestion={answerQuestion}
        nextStep={nextStep}
      />
    </>
  )
}


export default Home