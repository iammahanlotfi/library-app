import { useState } from "react";

import {books} from "../constants/mockData.js"
import BookCard from "./BookCard.jsx";
import SideCard from "./SideCard.jsx";

import styles from "./Books.module.css" 

function Books() {

  const [liked , setLiked] = useState([]);

  const handleLikeList = (book , status) => { 
    if(status) { 
      const newLikedList = liked.filter((item) => item.id !== book.id) ; 
      setLiked(newLikedList) ; 
    }
    else { 
      setLiked(liked => [...liked , book]) ;
    }
  }

  return (
    <div  className = {styles.container} >
        <div className={styles.cards} >{books.map((book) => (
            <BookCard key={book.id}  data = {book}  handleLikeList = {handleLikeList} />
        ))}
        </div>
    
        {!!liked.length && (<div className={styles.favorite}>
          <h4>Favorite</h4>
          {liked.map((book) => (<SideCard key={book.id} data = {book} />))}</div>)}
    </div>
  )
}

export default Books