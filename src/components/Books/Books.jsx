import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-8">Books</h2>
            <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book => <Book book={book} key={books.id}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;