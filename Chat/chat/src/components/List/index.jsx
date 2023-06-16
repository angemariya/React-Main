import styles from "./styles.module.css"

export const List = ({messages}) => {
    return (
        <div className={styles.list}>
            {messages.map(({text, timestamp, attachment}) => 
            <div className={styles.message} key={timestamp}>
                <p>
                    {text}
                    {attachment !== undefined ? <img src={attachment} alt={text}/> : null}
                </p> 
                <time>{timestamp}</time>

            </div>
            )}
        </div>
    )
}