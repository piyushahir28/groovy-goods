import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import { Footer } from "../Footer/Footer";
import "./Home.css";

export const Home = () => {
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    const response = await axios.get("/api/categories");
    setCategory(response.data.categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-image">
          <img src="./home.jpg" alt="header" />
        </div>
        <div className="main-header">
          <h1>
            Groove into Funky Ecommerce Delights -{" "}
            <span>Shop, Jam, Repeat!</span>
          </h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="category-header">
        <div>
          <h2>
            Shop by <span>Category</span>
          </h2>
        </div>
      </div>
      <br />
      <div className="category-container">
        {category?.map(({ _id, categoryName, description }) => (
          <div key={_id} className="category-card">
            <p className="card-text">{categoryName}</p>
            <img src="./category.png" alt="tshirt" />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
