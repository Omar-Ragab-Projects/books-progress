"use client";

import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext(null);

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("books"))) {
      setBooks(JSON.parse(localStorage.getItem("books")));
    }
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
}
export default BooksProvider;
