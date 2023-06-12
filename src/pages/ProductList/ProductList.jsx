import { useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./ProductList.css";
import { DataContext } from "../../context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const ProductList = () => {
  const { state, dispatch } = useContext(DataContext);
  const filterByCategory =
    state.filters.category.length > 0
      ? state.products.filter((product) =>
          state.filters.category.includes(product.category)
        )
      : state.products;

  const filterByRating = filterByCategory.filter(
    ({ rating }) => rating <= state.filters.rating
  );

  const filterByPrice = state.filters.price
    ? state.filters.price === "low-to-high"
      ? filterByRating.sort((a, b) => a.price - b.price)
      : filterByRating.sort((a, b) => b.price - a.price)
    : filterByRating;

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
                    checked={state.filters.category.includes(
                      category.categoryName
                    )}
                    onChange={() => {
                      dispatch({
                        type: "CHANGE_FILTER",
                        payload: category.categoryName,
                        filterType: "category",
                      });
                    }}
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
            <input
              type="radio"
              name="price-filter"
              id="high-to-low"
              value="high-to-low"
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_FILTER",
                  payload: e.target.value,
                  filterType: "price",
                });
              }}
            />
            <label htmlFor="high-to-low">High to Low</label>
            <br />
            <input
              type="radio"
              name="price-filter"
              id="low-to-high"
              value="low-to-high"
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_FILTER",
                  payload: e.target.value,
                  filterType: "price",
                });
              }}
            />
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
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_FILTER",
                  payload: e.target.value,
                  filterType: "rating",
                });
              }}
            />
          </div>
        </div>
        <div className="product-section">
          {filterByPrice.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
