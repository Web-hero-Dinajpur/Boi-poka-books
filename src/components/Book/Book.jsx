
const Book = ({book}) => {
    const {image, bookName} = book;
    return (
        <div className="card bg-base-100 mb-8 w-96 shadow-xl">
            <figure className=" bg-blue-200 py-8 ">
                <img
                    src={image}
                    className="h-[166px]"
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;