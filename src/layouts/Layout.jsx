import React, { useState } from 'react'
import styles from "../layouts/Layout.module.css"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Layout({children , mood , setMood}) {

  const handleMood = () => { 
    setMood(mood => !mood) ; 
  }
  return (
    <>
    <header className={`${styles.header} ${mood ? styles.light : ""} `} >
        <h1>Book App</h1>
        <div style={{display : "flex"}} >
          <p style={{marginRight : "20px"}} ><span>Mahan Lotfi</span> | React.js</p>
          <button onClick={handleMood} className= {styles.moodBTN} >
              {mood ? (<FaMoon color= "#1e1e1e" fontSize="1.8rem" />)  : (<FaSun  color="#e0e0e0" fontSize="1.8rem"/>)}
            </button> 
        </div>
    </header>
    {children}
    <footer className={`${styles.footer} ${mood ? styles.light : ""}`} >
        <p>Mahan Lotfi</p>
    </footer>
    </>
  )
}
export default Layout