"use client";

import { useState } from "react";
import Popup from "./Popup";

function AddBook() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-bold rounded-lg cursor-pointer py-2 mb-4"
      >
        + اضف كتاب جديد
      </button>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
}
export default AddBook;
