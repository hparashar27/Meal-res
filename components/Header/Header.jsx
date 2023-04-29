import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className={styles.Header_top}>
      <Link href='/'>
    <h2>Header</h2>  
      </Link>
      </div>
    </>
  )
}

export default Header