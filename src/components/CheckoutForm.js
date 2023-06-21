import React, { useContext, useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import LoadingBtn from "./LoadingBtn";

const CheckoutForm = () => {
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    userName,
    email,
    address,
    number,
    setNumber,
    setUserName,
    setEmail,
    setAddress,
  } = UserAuth();
  const { setModalIsOpen, setOrders, orders, cart } = useContext(CartContext);
  const { setIsOpen } = useContext(SidebarContext);

  // number
  const handlePhNumber = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 11) {
      setNumber(inputValue.slice(0, 11));
    } else {
      setNumber(inputValue);
    }
  };

  // post code
  const handlePostCode = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 6) {
      setPostCode(inputValue.slice(0, 6));
    } else {
      setPostCode(inputValue);
    }
  };

  // card number
  const handleCardNum = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 16) {
      setCardNum(inputValue.slice(0, 16));
    } else {
      setCardNum(inputValue);
    }
  };

  // year
  const handleYear = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 4) {
      setYear(inputValue.slice(0, 4));
    } else {
      setYear(inputValue);
    }
  };

  // cvv
  const handleCvv = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 3) {
      setCvv(inputValue.slice(0, 3));
    } else {
      setCvv(inputValue);
    }
  };

  // form submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      userName &&
      email &&
      number &&
      address &&
      city &&
      postCode &&
      cardNum &&
      year &&
      cvv
    ) {
      if (number.length < 10) {
        toast.error("Mobile Number must be 10 digits");
      } else if (postCode.length < 6) {
        toast.error("Post code must be 6 digits");
      } else if (cardNum.length < 16) {
        toast.error("Card Number must be 16 digits");
      } else if (cvv.length < 3) {
        toast.error("CVV Number must be 3 digits");
      } else if (year.length < 4) {
        toast.error("Year Number must be 4 digits");
      } else if (year < 2022) {
        toast.error("Card year expired...Please enter a valid card details");
      } else {
        setIsOpen(false);
        setIsLoading(true);
        setOrders([...orders, ...cart]);
        setTimeout(() => {
          setIsLoading(false);
          setModalIsOpen(true);
        }, 2500);
      }
    } else {
      setModalIsOpen(false);
      toast.error("All fields are mandatory to fill");
    }
  };

  return (
    <>
      <div className="flex flex-col md:w-full">
        <h2 className="mb-4 font-bold md:text-xl text-heading ">
          Shipping Address
        </h2>
        <form
          onSubmit={submitHandler}
          className="justify-center w-full mx-auto"
        >
          <div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="First Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="lastName"
                  className="block mb-3 text-sm font-semibold text-gray-500 mt-3 md:mt-0"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mt-4 space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  id="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="number"
                  className="block mb-3 text-sm font-semibold text-gray-500 mt-3 md:mt-0"
                >
                  Mobile Number
                </label>
                <input
                  id="number"
                  type="number"
                  value={number}
                  onChange={handlePhNumber}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Address"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Address
                </label>
                <textarea
                  id="Address"
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  cols="20"
                  rows="3"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="city"
                  className="block mb-3 mt-3 md:mt-0 text-sm font-semibold text-gray-500"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="postcode"
                  className="block mb-3 mt-3 md:mt-0 text-sm font-semibold text-gray-500"
                >
                  Postcode
                </label>
                <input
                  id="postcode"
                  type="number"
                  minLength={6}
                  maxLength={6}
                  value={postCode}
                  onChange={handlePostCode}
                  placeholder="Post Code"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* card details */}
            <h2 className="my-4 font-bold md:text-xl text-heading ">
              Card Details
            </h2>

            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="card-num"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Card Number
                </label>
                <input
                  id="card-num"
                  type="number"
                  minLength={16}
                  maxLength={16}
                  value={cardNum}
                  onChange={handleCardNum}
                  placeholder="Card Number"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full flex gap-1 md:gap-3 mt-4 md:mt-0 lg:w-1/2 ">
                <div className="w-full">
                  <label
                    htmlFor="year"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Expiry Year
                  </label>
                  <input
                    id="year"
                    type="number"
                    minLength={4}
                    maxLength={4}
                    value={year}
                    onChange={handleYear}
                    autoComplete="off"
                    placeholder="Expiry Year"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="cvv"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="number"
                    minLength={3}
                    maxLength={3}
                    value={cvv}
                    autoComplete="off"
                    onChange={handleCvv}
                    placeholder="CVV"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <label
                htmlFor="tick"
                className="flex items-center text-sm group text-heading"
              >
                <input
                  id="tick"
                  type="checkbox"
                  className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1 cursor-pointer"
                />
                <span className="ml-2">
                  Save this information for next time
                </span>
              </label>
            </div>
            <div className="mt-4">
              {isLoading ? (
                <LoadingBtn />
              ) : (
                <button
                  type="submit"
                  className="w-full lg:w-auto px-6 py-2.5 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                >
                  Proceed To Pay
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
