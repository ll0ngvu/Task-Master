import styles from '@/app/styles/taskItem.module.css'
import { be_vietnam_pro } from '@/app/fonts'

export default function TaskItem({taskDescription, onComplete}) {
    return (
        <div className={styles.tasksContainer}> 
            <div className={styles.tasksBox}>
                <div className={styles.taskItem}>
                    <input
                        type='checkbox'
                        id={taskDescription}
                    />
                    <label htmlFor={taskDescription} className={be_vietnam_pro.className}>This is task 1</label>
                    {/* <label htmlFor={taskDescription}>{taskDescription}</label> */}
                    
                    <button onClick={() => onComplete(taskDescription)} className={styles.taskRemove}></button>

                </div>
            </div>
        </div>
    )
}