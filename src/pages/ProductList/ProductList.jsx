import { useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./ProductList.css";
import { DataContext } from "../../context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SentimentDissatisfied } from "@mui/icons-material";

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

  const filterBySearch = state.filters.search
    ? filterByPrice.filter(({ title }) =>
        title.toLowerCase().includes(state.filters.search.toLowerCase())
      )
    : filterByPrice;

  const handleFilterClear = () => {
    dispatch({
      type: "CLEAR_FILTER",
      payload: { price: "", rating: 5, category: [], search: "" },
    });
  };

  return (
    <>
      <div className="product-list">
        <div className="filter-section">
          <p>
            Filters{" "}
            <span className="btn-clear-filter" onClick={handleFilterClear}>
              Clear
            </span>
          </p>
          <div className="indFilter">
            Category
            <br />
            {state.categories.map((category) => {
              return (
                <>
                  <input
                    type="checkbox"
                    name={category.categoryName}
                    id={category.categoryName}
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
                  <label htmlFor={category.categoryName}>
                    {category.categoryName}
                  </label>
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
              checked={state.filters.price === "high-to-low"}
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
              checked={state.filters.price === "low-to-high"}
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
              value={state.filters.rating}
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
        {filterBySearch.length === 0 ? (
          <div className="nopage">
            <h2>
              Oops!
              <SentimentDissatisfied /> No product found.{" "}
            </h2>
          </div>
        ) : (
          <div className="product-section">
            {filterBySearch.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
