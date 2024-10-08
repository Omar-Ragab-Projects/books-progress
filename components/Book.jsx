import { FiLink } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import Popup from "./Popup";
import TrashIcon from "./TrashIcon";

function Book({ book, index }) {
  const [editBook, setEditBook] = useState(false);

  return (
    <li className="flex gap-4 items-center mb-4 ">
      <a href={book.booklink} target="_blank">
        <FiLink className="w-8 h-8 bg-gray-600 hover:bg-gray-700 transition text-white p-2 rounded-full cursor-pointer" />
      </a>
      <input
        type="text"
        readOnly
        className="min-w-[200px] max-md:min-w-[60px] max-md:max-w-[100px] border py-1 px-2 rounded "
        value={book.bookname}
      />

      <input
        readOnly
        type="number"
        className="border w-20 pr-4 py-1 rounded max-md:w-16"
        placeholder="1"
        value={book.bookprogress}
      />
      <MdEdit
        onClick={() => setEditBook(true)}
        className="w-8 h-8 bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded-full cursor-pointer"
      />
      <TrashIcon index={index} />
      <Popup
        showPopup={editBook}
        setShowPopup={setEditBook}
        book={book}
        index={index}
      />
    </li>
  );
}
export default Book;
