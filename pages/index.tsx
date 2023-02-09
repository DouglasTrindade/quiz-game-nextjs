import { useEffect, useState } from "react";
import Question from "../components/Question/index";
import ModelQuestion from "../model/question";
import questions from "./api/questions-base";
import Button from "../components/Button/index";
import Quiz from "../components/Quiz/index";
import quiz from "./api/quiz";
import { useRouter } from "next/router";

const BASE_URL = 'http://localhost:3000/api'

const Home = () => {
  const router = useRouter()

  const [questionsIds, SetQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<ModelQuestion>();
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  const questionIdsLoad = async () => {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const questionsIds = await resp.json()
    console.log(questionsIds)
    SetQuestionsIds(questionsIds)
  }

  const questionLoad = async (questionId: number) => {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    const newQuestion = ModelQuestion.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    questionIdsLoad()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && questionLoad(questionsIds[0])
  }, [questionsIds])
  
  const answerQuestion = (answerQuestion: ModelQuestion) => {
    setQuestion(answerQuestion)
    const hit =  answerQuestion.hit
    setRightAnswers(rightAnswers + (hit ? 1: 0))
    console.log(rightAnswers + (hit ? 1 : 0))
  }

  const idNextQuestion = () => {
    const nextIndice = questionsIds.indexOf(question.id) + 1
    return questionsIds[nextIndice]
  }

  const nextStep = () => {
    const nextId = idNextQuestion()
    nextId ? nextQuestion(nextId) : finalize()
  }

  const nextQuestion = (nextId: number) => {
    questionLoad(nextId)
  }

  const finalize = () => {
    router.push({
      pathname: "/result",
      query: {
        total: questionsIds.length,
        right: rightAnswers
      }
    })
  }

  return (
    <>
      {question ?
        <Quiz
          question={question}
          lastQuestion={idNextQuestion() === undefined}
          answerQuestion={answerQuestion}
          nextStep={nextStep}
        /> : false
      }    
    </>
  )
}


export default Home