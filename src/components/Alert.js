import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";

import { CartContext } from "../contexts/CartContext";

const Alert = () => {
  const { alertMsg } = useContext(CartContext);

  return (
    <section className="container mx-auto w-[350px] md:[400px]">
      <div className={`alert alert-${alertMsg.type}`}>
        <div className="fa-check text-green-500">
          <FaCheckCircle />
        </div>
        <small>{alertMsg.msg}</small>
      </div>
    </section>
  );
};

export default Alert;
