'use client';

import styles from './page.module.css'
import InputBox from '@/app/components/inputBox'
import Toggle from '@/app/components/toggle'
import { be_vietnam_pro } from '@/app/fonts'
import React, { useState, useEffect } from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import TaskBox from '@/app/components/taskBox'

export default function Home() {

  const [isDark, setIsDark] = useLocalStorage('isDark', false);
  const [hasMounted, setHasMounted] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleTaskCompleted = (description) => {
    const updatedTasks = tasks.map(task =>
        task.description === description ? { ...task, isCompleted: !task.isCompleted } : task
    );
    updatedTasks.sort((a, b) => a.isCompleted - b.isCompleted);
    setTasks(updatedTasks);
  };

  const addTask = (description) => {
    setTasks([...tasks, { description, isCompleted: false }]);
  };

  const removeTask = (description) => {
    setTasks(tasks.filter(task => task.description !== description));
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={styles.Home} data-theme={isDark ? 'dark' : 'light'}>

      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />

      <div className={styles.title}>
        <h1 className={be_vietnam_pro.className}>TASK MASTER</h1>
      </div>

      <InputBox onSubmitTask={addTask}/>

      <TaskBox tasks={tasks} onComplete={toggleTaskCompleted} onRemove={removeTask}/>

    </div>
  )
}
