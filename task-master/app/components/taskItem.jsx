import styles from '@/app/styles/taskItem.module.css'
import { be_vietnam_pro } from '@/app/fonts'

export default function TaskItem({task, onComplete, onRemove}) {

    return (

        <div>
        
            <div className={styles.taskItem}>
                <input
                    type='checkbox'
                    id={task.description}
                    checked={task.isCompleted}
                    onChange={() => onComplete(task.description)}
                />
                <label 
                    htmlFor={task.description} 
                    className={`${task.isCompleted ? styles.strikeThrough : ''} ${be_vietnam_pro.className}`}>
                    {task.description}
                </label>

                <button onClick={() => onRemove(task.description)} className={styles.taskRemove}></button>
            </div>
        </div>

    )
}