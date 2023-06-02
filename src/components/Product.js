import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { HiTag } from "react-icons/hi";

// import cart context
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { setIsOpen } = useContext(SidebarContext);

  // destructure product
  const { id, image, title, category, price, originalPrize, offers, rating } =
    product;

  return (
    <>
      <div>
        <div className=" h-[350px] mb-4 bg-yellow-200 relative overflow-hidden group transition">
          <div className="w-full h-full flex justify-center items-center">
            {/* image */}
            <div className="w-full h-full mx-auto flex justify-center items-center">
              <img
                className="h-full group-hover:scale-110 transition duration-300 p-img"
                src={image}
              
                alt={title}
              />
            </div>
          </div>
          {/* buttons */}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-700">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white w-8 h-8 bg-gray-800 hover:bg-slate-900 transition-all duration-300">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              onClick={() => setIsOpen(false)}
              to={`/product/${id}`}
              className="w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl hover:bg-slate-200 transition-all duration-300"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
        {/* category */}
        <div className="flex item-center justify-between">
          <div>
            <div className="text-sm capitalize text-gray-400 mb-1">
              {category}
            </div>
            <Link to={`/product/${id}`}>
              <h2 className="font-semibold mb-1 text-slate-300">{title}</h2>
            </Link>
            <div>
              <p className="font-semibold inline-flex bg-slate-900   text-white px-2 py-1 rounded-md">
               ${price}{" "}
                <span className="originalPrize text-gray-500">
                ${ originalPrize}
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-black flex gap-x-1 font-medium mb-1">
             {offers} {" "}
              <span>
                <HiTag />
              </span>{" "}
            </p>
            <div className="inline-flex gap-x-1 p-1 rounded-full bg-yellow-400 text-white">
              <small className="inline">{rating} </small>

              <small className="inline text-sm">
                {" "}
                <FaStar className="text-sm pb-1" />{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
