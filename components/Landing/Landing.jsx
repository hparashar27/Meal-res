import React from 'react'
import styles from "./Landing.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Landing = () => {
  return (
    <>
    <div className={styles.landing_page}>
      <Image 
      className={styles.img}
      alt='LandingPageBg'
      width={10000}
      height={1000}
      src="/images/bg.png"
      />
      <div className={styles.landing}>
      <h2>Expole food from around the world</h2>
      <Link href="/types">
      <button>List of Cuisines</button>
      </Link>     
    </div>
      </div>

</>
  )
}

export default Landing