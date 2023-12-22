import styles from '@/app/styles/taskItem.module.css'

export default function TaskItem({task, toggleTask}) {
    return (
        <li>
            <input
                type="checkbox"
                id={`task-${task.id}`}
                className={styles.checkbox}
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
        </li>
    )
}