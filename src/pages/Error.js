import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="lg:w-[75%] h-auto mx-auto">
        <img
          src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1681371099/funny-error-404-background-design_1167-219_q0exuc.avif"
          alt="error"
          className="w-[100%] h-screen"
        />
      </div>
      <Link className="-mt-12" to={"/"}>
        <p className="flex gap-2 items-center bg-gray-700 text-white font-semibold p-2 rounded-lg">
          Go to signin page <BsArrowLeft />{" "}
        </p>
      </Link>
    </div>
  );
};

export default Error;
