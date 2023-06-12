import { useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./ProductList.css";
import { DataContext } from "../../context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const ProductList = () => {
  const { state } = useContext(DataContext);

  return (
    <>
      <div className="product-list">
        <div className="filter-section">
          <p>Filters</p>
          <div className="indFilter">
            Category
            <br />
            {state.categories.map((category) => {
              return (
                <>
                  <input
                    type="checkbox"
                    name={category.categoryName}
                    id="category"
                  />
                  <label htmlFor="category">{category.categoryName}</label>
                  <br />
                </>
              );
            })}
          </div>
          <div className="indFilter">
            Price
            <br />
            <input type="radio" name="price-filter" id="high-to-low" />
            <label htmlFor="high-to-low">High to Low</label>
            <br />
            <input type="radio" name="price-filter" id="low-to-high" />
            <label htmlFor="low-to-high">Low to High</label>
            <br />
          </div>
          <div className="indFilter">
            Rating
            <br />
            <input
              type="range"
              name="range-filter"
              id="range"
              min="0"
              max="5"
              step="1"
            />
          </div>
        </div>
        <div className="product-section">
          {state.products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </>
  );
};
