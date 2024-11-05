import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const book = data.find(book =>book.bookId === id)
    
    const {image} = book;

    return (
        <div className="mx-auto w-96">
            <h2>book details : {bookId}</h2>
            <img className="w-36 my-4" src={image} alt="" />
            <div className="my-4">
            <button className="btn btn-info">Read</button>
            <button className="btn btn-info ml-4">WishLish</button>
            </div>
        </div>
    );
};

export default BookDetails;