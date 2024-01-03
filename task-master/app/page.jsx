'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import InputBox from '@/app/components/inputBox'
import TaskItem from '@/app/components/taskItem'
import Toggle from '@/app/components/toggle'
import { be_vietnam_pro } from '@/app/fonts'
import React, { useState, useEffect } from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';

export default function Home() {

  const [isDark, setIsDark] = useLocalStorage('isDark', false);
  const [hasMounted, setHasMounted] = useState(false);

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

      <InputBox />
      <TaskItem />
    </div>
  )
}
