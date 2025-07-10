import {books} from "../constants/mockData.js"
import BookCard from "./BookCard.jsx";
function Books() {
  return (
    <div>
        <div>{books.map((book) => (
            <BookCard key={book.id}  data = {book} />
        ))}</div>
        <div></div>
    </div>
  )
}

export default Books