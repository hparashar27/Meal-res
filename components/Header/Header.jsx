import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const Header = () => {
  const pathname =  usePathname().split("/");
  let currentpath = pathname[2];
  let reciepeID = pathname[3];
  console.log(pathname)
  return (
    <>
    <div className={styles.header}>
    <div className={styles.Header_top}>
      <Link href='/'>
    <h2>FOOOOOOOOOD</h2>  
      </Link>
      </div>
      <div className={styles.back}>
        {pathname && currentpath && (
          <Link className={styles.back_button} href={reciepeID ? `/types/${currentpath}` : `/types`}>
            Back to {reciepeID ? `${currentpath} recepies` : `recepies`}
          </Link>
        )}
      </div>
      </div>
    </>
  )
}

export default Header