import React, { useState, useEffect } from "react";
import PizzaCard from "../../reusable-components/PizzaCard";
import "./HomePage.scss";
import { firestore } from "../../firebase_setup/firebase";
import { collection, getDocs } from "@firebase/firestore";
import { Outlet } from "react-router-dom";

function HomePage() {
  const [allPizzas, setAllPizzaData] = useState([]);

  useEffect(() => {
    console.log("====  Inside HomePage  ====");
    getDocs(collection(firestore, "ListAllPizzas"))
      .then((querySnapshot) => {
        setAllPizzaData(
          querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0].data
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="home-page-wrapper">
        <div className="pizza-cards-wrapper">
          {allPizzas.map((pizza, index) => (
            <PizzaCard pizza={pizza} key={index} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default HomePage;
