import ModelQuestion from "../../model/question";
import Answer from "../Answer";
import Enunciation from "../Enunciation/index";
import styles from "./styles.module.css";
import Timer from "../Timer/index";

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
]

interface QuestionProps {
  value: ModelQuestion
  answerProvided: (indice: number) => void
  timeIsOver: () => void
}

const Question = (props: QuestionProps) => {
  const question = props.value

  return (
    <div className={styles.question}>
      <Enunciation text={question.enunciation} />
      <Timer
        key={question.id}
        duration={6} 
        timeIsOver={props.timeIsOver}
      />
      {question.answers.map((answer, i) => {
        return ( 
          <Answer
            key={`${question.id} - ${i}`}
            value={answer}
            indice={i}
            letter={letters[i].value}
            bgLetterColor={letters[i].color}
            answerProvided={props.answerProvided}
          /> 
        )
      })
    }
    </div>
  );
}
 
export default Question