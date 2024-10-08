import { BooksContext } from "@/context/BooksProvider";
import { useContext, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

function Popup({ showPopup, setShowPopup, index }) {
  const { books, setBooks } = useContext(BooksContext);
  const [bookNameValue, setBookNameValue] = useState("");
  const [bookProgressValue, setBookProgressValue] = useState("");
  const [bookLinkValue, setBookLinkValue] = useState("");

  useEffect(() => {
    if (index >= 0) {
      setBookNameValue(books[index].bookname);
      setBookProgressValue(books[index].bookprogress);
      setBookLinkValue(books[index].booklink);
    }
  }, []);

  function formAction(formData) {
    const rawData = Object.fromEntries(formData);
    if (index >= 0) {
      const filteredArr = books.map((b, i) => i == index && rawData);
      setBooks(filteredArr);
      localStorage.setItem("books", JSON.stringify(filteredArr));
      setShowPopup(false);
    } else {
      setBooks([...books, rawData]);
      localStorage.setItem("books", JSON.stringify([...books, rawData]));
      setShowPopup(false);
    }
  }

  if (showPopup)
    return (
      <div className="layout absolute inset-0 w-full h-full bg-black/80 flex items-center justify-center">
        <div className="popup p-4 bg-white rounded-xl min-w-[300px]">
          <p>
            <FaXmark
              onClick={() => setShowPopup(false)}
              className="w-6 h-6 p-1 bg-red-500 text-white rounded-full cursor-pointer"
            />
          </p>
          <form action={formAction}>
            <div className="mb-5 mt-6">
              <label htmlFor="bookname" className="block mb-2  ">
                اسم الكتاب*
              </label>
              <input
                type="text"
                name="bookname"
                id="bookname"
                className="w-full border border-black/45 rounded px-2 py-1"
                required
                value={index >= 0 ? bookNameValue : null}
                onChange={(e) => setBookNameValue(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="bookprogress" className="block mb-2  ">
                الصفحات المقروءه من الكتاب
              </label>
              <input
                type="number"
                name="bookprogress"
                id="bookprogress"
                className="w-full border border-black/45 rounded px-2 py-1"
                value={index >= 0 ? bookProgressValue : null}
                onChange={(e) => setBookProgressValue(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="booklink" className="block mb-2  ">
                لينك تحميل الكتاب
              </label>
              <textarea
                type="text"
                name="booklink"
                id="booklink"
                className="w-full border border-black/45 rounded px-2 py-1"
                value={index >= 0 ? bookLinkValue : null}
                onChange={(e) => setBookLinkValue(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold w-full py-2 rounded-lg  "
            >
              اضافة الكتاب
            </button>
          </form>
        </div>
      </div>
    );
}
export default Popup;
