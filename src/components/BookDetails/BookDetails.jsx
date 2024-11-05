import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/addToDb";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)

    const { image } = book;

    const handleMarkAsRead = () => {
        addToStoredReadList(id);
    }

    return (
        <div className="mx-auto w-96">
            <h2>book details : {bookId}</h2>
            <img className="w-36 my-4" src={image} alt="" />
            <div className="my-4">
                <button onClick={()=>handleMarkAsRead(id)} className="btn btn-success">Mak as Read</button>
                <button className="btn btn-success ml-4">Add to WishLish</button>
            </div>
        </div>
    );
};

export default BookDetails;