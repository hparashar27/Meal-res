import React from 'react'
import styles from "@/components/Header/Header.module.css"
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div>
      <Link href="/"><button className={styles.Home_button}>Home</button></Link>
        {children}
    </div>
  )
}

export default layout