import React from 'react'
import { IoSearch } from "react-icons/io5";

import styles from "./SearchBox.module.css"

function SearchBox({search , setSearch ,searchHandler }) {
    const changeHandler = (event) => { 
        setSearch(event.target.value.toLowerCase()) ; 
    }
  return (
    <div className={styles.search} >
        <input type="text" placeholder="Search title"  value={search} onChange={changeHandler}  />
        <button onClick={searchHandler} >
            <IoSearch />
        </button>
    </div>
  )
}

export default SearchBox