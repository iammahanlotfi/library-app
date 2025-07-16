
import { IoSearch } from "react-icons/io5";

import styles from "./SearchBox.module.css"

function SearchBox({search , setSearch ,searchHandler, mood }) {
    const changeHandler = (event) => { 
        setSearch(event.target.value.toLowerCase()) ; 
    }
  return (
    <div className={styles.search} >
        <input type="text" placeholder="Search title"  value={search} onChange={changeHandler} style={mood ? {backgroundColor: "#96b5ee"} : {backgroundColor : "#e0e0e0"}}  />
        <button onClick={searchHandler} style={mood ? {backgroundColor : "#96b5ee" , color  : '#1e1e1e'} : {backgroundColor : "#6552f4" , color : "#fff"}} >
            <IoSearch />
        </button>
    </div>
  )
}

export default SearchBox