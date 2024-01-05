import styles from '@/app/styles/inputBox.module.css'
import { be_vietnam_pro } from '@/app/fonts'
import React, { useState } from 'react';

export default function InputBox({ onSubmitTask }) {

    const placeholderText = 'Add a task...';
    const [inputValue, setInputValue] = useState('');

    const handleFous = (e) => {
        e.target.placeholder = '';
    }

    const handleBlur = (e) => {
        e.target.placeholder = placeholderText;
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            onSubmitTask(inputValue);
            setInputValue(''); // Clear the input box after submission
        }
    }

    return (
        <div className={be_vietnam_pro.className}>
            <div className={styles.inputContainer}>
                <input
                type='text'
                placeholder={placeholderText}
                onFocus={handleFous}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                value={inputValue}
                className={styles.inputBox}
                />
            </div>
        </div>
    )
}