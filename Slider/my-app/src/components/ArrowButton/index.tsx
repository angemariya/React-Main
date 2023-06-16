import styles from "./styles.module.scss"

export const Button = (props: { name: string }) => (
    <button
      className={styles["arrow-button"]}>
      {props.name}
    </button>
);