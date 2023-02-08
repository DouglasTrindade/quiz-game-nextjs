import Link from "next/link";
import { hrtime } from "process";
import styles from "../Button/styles.module.css";

interface ButtonProps {
  text: string
  href?: string
  onClick?: (e: any) => void
}

const Button = (props: ButtonProps) => {

  return props.href ? (
    <Link href={props.href}>
      <>
        <button className={styles.button}
          onClick={props.onClick}>
          {props.text}
        </button>
      </>
    </Link>
  ) : (
    <>
      <button className={styles.button}
        onClick={props.onClick}>
        {props.text}
      </button>
    </>
  )
}

export default Button