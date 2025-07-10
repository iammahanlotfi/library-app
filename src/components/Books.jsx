import { useState } from "react";

import {books} from "../constants/mockData.js"
import BookCard from "./BookCard.jsx";

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
    <div>
        <div>{books.map((book) => (
            <BookCard key={book.id}  data = {book}  handleLikeList = {handleLikeList} />
        ))}
        </div>
        {!!liked.length && (<div></div>)}
    </div>
  )
}

export default Books