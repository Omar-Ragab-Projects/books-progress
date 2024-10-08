"use client";

import { BooksContext } from "@/context/BooksProvider";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

function TrashIcon({ index }) {
  const { books, setBooks } = useContext(BooksContext);

  function deleteBookHandler() {
    const filteredArr = books.filter((book, i) => i !== index);
    setBooks(filteredArr);
    localStorage.setItem("books", JSON.stringify(filteredArr));
  }

  return (
    <FaTrash
      onClick={deleteBookHandler}
      className="w-8 h-8 bg-red-500 hover:bg-red-600 transition text-white p-2 rounded-full cursor-pointer"
    />
  );
}
export default TrashIcon;
