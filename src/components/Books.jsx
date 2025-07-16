import { useState } from "react";

import {books as bookData } from "../constants/mockData.js"
import BookCard from "./BookCard.jsx";
import SideCard from "./SideCard.jsx";
import SearchBox from "./SearchBox.jsx";
import styles from "./Books.module.css" 

function Books({mood}) {

  const [books , setBooks] = useState(bookData) ; 

  const [liked , setLiked] = useState([]);
  const [search , setSearch] = useState("");

  const handleLikeList = (book , status) => { 
    if(status) { 
      const newLikedList = liked.filter((item) => item.id !== book.id) ; 
      setLiked(newLikedList) ; 
    }
    else { 
      setLiked(liked => [...liked , book]) ;
    }
  }

  const searchHandler = () => { 
    if(search) { 
      const newBooks = bookData.filter(book => book.title.toLocaleLowerCase().includes(search)) ; 
      setBooks(newBooks) ; 
    }
    else { 
      setBooks(bookData) ; 
    }
  }

  return (
    <>
    <SearchBox search = {search} setSearch = {setSearch} searchHandler = {searchHandler} mood = {mood} />
    <div  className = {styles.container} >
        <div className={styles.cards} >{books.map((book) => (
            <BookCard key={book.id}  data = {book}  handleLikeList = {handleLikeList} mood = {mood} />
        ))}
        </div>
    
        {!!liked.length && (<div className={styles.favorite} style={mood ? {backgroundColor: "#96b5ee"} : {backgroundColor : "#6552f4"}} >
          <h4>Favorite</h4>
          {liked.map((book) => (<SideCard key={book.id} data = {book} mood = {mood}  />))}</div>)}
    </div>

    </>
  )
}

export default Books