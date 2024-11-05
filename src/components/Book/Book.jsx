
const Book = ({ book }) => {
    const { image, bookName, author, publisher, rating, category, tags } = book;
    return (
        <div className="card bg-base-100 mb-8 w-96 shadow-xl">
            <figure className=" bg-blue-200 py-8 ">
                <img
                    src={image}
                    className="h-[166px]"
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className="flex gap-4 ">
                    {
                        tags.map(tag => <button className="btn btn-xs text-green-600">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p>By : {author}</p>
                <hr />
                <div className="card-actions justify-between mt-4 items-center">
                    <div className="badge badge-outline text-green-600 font-semibold">{category}</div>
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;