import styles from './styles.module.css'

export const Product = ({link, title, price}) => (
    <div className={styles.item}>
        <img src={link} alt="Велосипед"/>
        <p>{title}</p>
        <p>Цена: {price}</p>
    </div>
)

//rfc