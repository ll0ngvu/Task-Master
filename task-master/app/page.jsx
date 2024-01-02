'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import InputBox from '@/app/components/inputBox'
// import TaskItem from '@/app/components/TaskItem'
import Toggle from '@/app/components/toggle'
import { be_vietnam_pro } from '@/app/fonts'
import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

export default function Home() {

  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches; 
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className={styles.Home} data-theme={isDark ? 'dark' : 'light'}>

      <Head>
        <link rel='icon' href='./logo.png'/>
      </Head>

      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />

      <div className={styles.title}>
        <h1 className={be_vietnam_pro.className}>TASK MASTER</h1>
      </div>

      <InputBox />
      {/* <TaskItem /> */}
    </div>
  )
}
