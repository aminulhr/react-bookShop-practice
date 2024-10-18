/* eslint-disable react/prop-types */
const SingalBooks = ({ books, handalCart }) => {
  return (
    <>
      <div id="card" className="mt-8">
        <img src={books.img} alt="" className="w-36 h-48" />
        <h1 className="text-3xl">{books.name}</h1>
        <p className="text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, hic
          commodi at accusantium corrupti nisi suscipit?
        </p>
        <div id="card-footer" className="ml-3">
          <h1 className="text-3xl">Price: {books.price}$</h1>
          <button
            onClick={() => handalCart(books)}
            className="bg-orange-600 w-30 h-8 ml-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default SingalBooks;
