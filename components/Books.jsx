"use client";

import { useContext } from "react";
import Book from "./Book";
import { BooksContext } from "@/context/BooksProvider";

function Books() {
  const { books, setBooks } = useContext(BooksContext);
  return (
    <ul>
      {books.map((book, index) => {
        return <Book key={index} book={book} index={index} />;
      })}
    </ul>
  );
}
export default Books;
