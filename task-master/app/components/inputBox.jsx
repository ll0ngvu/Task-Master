import styles from '@/app/styles/inputBox.module.css'
import { be_vietnam_pro } from '@/app/fonts'

export default function InputBox() {

    const placeholderText = 'Add a task...';

    const handleFous = (e) => {
        e.target.placeholder = '';
    }

    const handleBlur = (e) => {
        e.target.placeholder = placeholderText;
    }

    return (
        <div className={be_vietnam_pro.className}>
            <div className={styles.inputContainer}>
                <input
                type='text'
                placeholder={placeholderText}
                onFocus={handleFous}
                onBlur={handleBlur}
                className={styles.inputBox}
                />
            </div>
        </div>
    )
}