import React from 'react'
import styles from "../layouts/Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header} >
        <h1>Book App</h1>
        <p><span>Mahan Lotfi</span> | React.js</p>
    </header>
    {children}
    <footer className={styles.footer} >
        <p>Mahan Lotfi</p>
    </footer>
    </>
  )
}
export default Layout