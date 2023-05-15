import React, { useEffect, useState } from "react";
import fashions from "../data/data";

// import products
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Slide, ToastContainer } from "react-toastify";
import { UserAuth } from "../contexts/AuthContext";

const Home = () => {
  const [myfashions, setMyFashions] = useState(fashions);

  const { user, fetchUserDetails } = UserAuth();

  useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, user?.uid]);

  // filter
  const filterBrands = (category) => {
    if (category === "All") {
      setMyFashions(fashions);
    } else {
      const updatedFashions = fashions.filter((dress) => {
        return dress.category === category;
      });
      setMyFashions(updatedFashions);
    }
  };

  // convert array to set & set to array
  const brands = [
    "All",
    ...new Set(
      fashions.map((dress) => {
        return dress.category;
      })
    ),
  ];

  return (
    <div>
      <Header />
      <ToastContainer
        position="top-right"
        pauseOnHover={false}
        transition={Slide}
      />
      <Hero />
      <Filter filterBrands={filterBrands} brands={brands} />
      <section className="py-16 px-3 lg:px-11 bg-zinc-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {myfashions.map((dress) => {
              return <Product product={dress} key={dress.id} />;
            })}
          </div>
        </div>
      </section>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Home;
