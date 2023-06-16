import styles from "./style.module.css";


export const Item = ({ title, description, price, thumbnail }) => {

    return (
        <div className={styles.itemWrapper}>
            <h3>{title}</h3>
            <img src={thumbnail} />
            <p>{description}</p>
            <span>{price}</span>
        </div>
    )
}