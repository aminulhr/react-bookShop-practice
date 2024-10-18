/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

import "./app.css";
import SingalBooks from "./SingalBooks";
function App() {
  const [book, setbook] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch("/faceDate.json")
      .then((res) => res.json())
      .then((data) => {
        setbook(data);
      });
  }, []);

  const handalCart = (ct) => {
    const isExist = cart.find((bk) => bk.id == ct.id);
    if (!isExist) {
      setcart([...cart, ct]);
    } else {
      alert("Alrady add to cart");
    }
    console.log(cart);
  };
  return (
    <>
      <div id="main-container">
        <div id="cards-container">
          {book.map((bk) => (
            <SingalBooks books={bk} handalCart={handalCart}></SingalBooks>
          ))}
          {/* এখানে handalCart & books  হলো props  এগুলো যেকোনো নাম দেওয়া যাবে। */}
        </div>
        <div id="carts-container">
          <h1 id="carts" className="text-4xl p-5 mt-5 h-96">
            This is Cart
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
