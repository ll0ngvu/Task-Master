import styles from '@/app/styles/inputBox.module.css'

export default function InputBox() {
    return (
        <div className={styles.inputContainer}>
            <input
            type='text'
            placeholder='Add a task'
            className={styles.inputBox}
            />
        </div>
    )
}