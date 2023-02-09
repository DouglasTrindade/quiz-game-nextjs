import Question from "../Question/index";
import ModelQuestion from "../../model/question";
import styles from "../Quiz/styles.module.css";
import Button from "../Button";

interface QuizProps {
   question: ModelQuestion
   lastQuestion: boolean
   answerQuestion: (question: ModelQuestion) => void
   nextStep: () => void
}

const Quiz = (props: QuizProps) => {
  const answerProvided = (indice: number) => {
    if (props.question.notAnswered) {
      props.answerQuestion(props.question.withAnswer(indice))
    }
  } 

  return (
    <div className={styles.quiz}>
      {props.question ? 
        <Question 
          value={props.question}
          answerProvided={answerProvided}
          timeIsOver={props.nextStep}
        /> : false
      }
      <Button
        onClick={props.nextStep}
        text={props.lastQuestion ? 'Finalizar' : 'Próxima'}
      />
    </div>
  );
}
 
export default Quiz;