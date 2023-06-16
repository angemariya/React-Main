import styles from './styles.module.css';

export const TaskItem = ({id, title, removeTask}) => {
    return (
        <div className={styles.item}>
            <p>{title}</p>
            <button 
                className={styles.buttonDelete} 
                onClick={()=>removeTask(id)}>Удалить</button>
        </div>
    );
}