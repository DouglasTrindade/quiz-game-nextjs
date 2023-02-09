import ModelAnswer from "../../model/answer";
import styles from "../Answer/styles.module.css";

interface AnswerProps {
  value: ModelAnswer
  indice: number
  letter: string
  bgLetterColor: string
  answerProvided: (indice: number) => void
}


const Answer = (props:  AnswerProps) => {
  const answer = props.value
  const answerRevealed = answer.revealed ? styles.answerRevealed : ''
  
  return (
    <div className={styles.answer}
      onClick={() => props.answerProvided(props.indice)}>
      <div className={`${answerRevealed} ${styles.answerContent}`}>
        <div className={styles.front}>
          <div className={styles.letter}
            style={{ backgroundColor: props.bgLetterColor }}>
            {props.letter}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.verse}>
          {answer.such ? (
          <div className={styles.such}>
            <div>A resposta certa é...</div>
            <div className={styles.value}>{answer.value}</div>
          </div>
          ) : (
          <div className={styles.wrong}>
            <div>A resposta informada está errada...</div>
            <div className={styles.value}>{answer.value}</div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
 
export default Answer