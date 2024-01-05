import styles from '@/app/styles/taskBox.module.css'
import TaskItem from '@/app/components/taskItem'

export default function TaskBox({ tasks, onComplete, onRemove}) {
    return (
        <div className={styles.tasksContainer}>
            <div className={styles.tasksBox}>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        task={task}
                        onComplete={onComplete}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    )
}