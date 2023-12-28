import styles from '@/app/styles/toggle.module.css'

export default function Toggle({handleChange, isChecked}) {
    return (
        <div className={styles.toggleContainer}>
            <input 
                type='checkbox'
                id='check'
                className={styles.toggle}
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor='check'></label>
        </div>
    )
}