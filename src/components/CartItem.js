import React, { useContext } from "react";
import { Link } from "react-router-dom";

// icon
import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { BsCurrencyRupee} from "react-icons/bs";

// cart context
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  // destructuring item
  const { id, title, image, price, amount, originalPrize } = item;

  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 bg-green-300 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex  items-center grid-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img
            className="max-w-[110px] mr-6 lg:-ml-5 rounded-lg"
            src={image}
            alt={title}
          />{" "}
        </Link>

        <div className="w-full flex ml-6 lg:ml-0  flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            <div>
              <Link
                className="text-sm uppercase font-medium max-w-[240px] text-white text-primary hover:underline"
                to={`/product/${id}`}
              >
                {title}
              </Link>
            </div>
            {/* remove icon */}
            <div
              className="text-xl cursor-pointer"
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition duration-300" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div
                className="flex-1 flex justify-center items-center cursor-pointer"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="flex-1 flex justify-center items-center cursor-pointer">
                {amount}
              </div>
              {/* plus icon */}
              <div
                className="flex-1 flex justify-center items-center cursor-pointer"
                onClick={() => increaseAmount(id)}
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item prize */}
            <div className="flex-1 flex items-center justify-around">
              <div className="inline-flex bg-slate-900 text-white px-3 py-1 ">
              <BsCurrencyRupee/>{price}{" "}
                <small className="cartoriginalPrize text-white">{originalPrize}</small>
              </div>
            </div>
            {/* final prize */}
            {/* make the price 2 digit */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
