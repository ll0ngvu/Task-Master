import Image from 'next/image'
import styles from './page.module.css'
import InputBox from '@/app/components/inputBox'
import TaskItem from '@/app/components/TaskItem'
import { be_vietnam_pro } from '@/app/fonts'

export default function Home() {
  return (
    <>

      <div className={styles.title}>
        <h1 className={be_vietnam_pro.className}>TASK MASTER</h1>
      </div>

      <InputBox />
      {/* <TaskItem /> */}
    </>
  )
}
