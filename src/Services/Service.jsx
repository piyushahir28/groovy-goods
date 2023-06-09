import axios from "axios";

export const LoginService = async ({ email, password }) => {
  const response = await axios.post("/api/auth/login", {
    email,
    password,
  });
  return response;
};

export const SignUpService = async ({ email, password, name }) => {
  const response = await axios.post("/api/auth/signup", {
    email,
    password,
    name,
  });
  return response;
};

export const getAllProducts = async () => {
  const response = await axios.get("/api/products");
  if (response.status === 200 || response.status === 201) {
    return response.data.products;
  }
};

export const getAllCategories = async () => {
  const response = await axios.get("/api/categories");
  if (response.status === 200 || response.status === 201) {
    return response.data.categories;
  }
};

export const getSingleProduct = async (productID) => {
  const response = await axios.get(`/api/products/${productID}`);
  if (response.status === 200 || response.status === 201) {
    return response.data.product;
  }
};

export const getSingleCategory = async (categoryID) => {
  const response = await axios.get(`/api/categories/${categoryID}`);
  if (response.status === 200 || response.status === 201) {
    return response.data.category;
  }
};

export const getCartItems = async (encodedToken) => {
  const response = await axios.get("/api/user/cart", {
    headers: {
      authorization: encodedToken,
    },
  });
  return response.data.cart;
};

export const addToCart = async (product, encodedToken) => {
  const response = await axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: encodedToken } }
  );
  return response.data.cart;
};

export const removeFromCart = async (productID, encodedToken) => {
  const response = await axios.delete(`/api/user/cart/${productID}`, {
    headers: { authorization: encodedToken },
  });
  return response.data.cart;
};

export const incDecCart = async (productID, type, encodedToken) => {
  const response = await axios.post(
    `/api/user/cart/${productID}`,
    { action: { type } },
    { headers: { authorization: encodedToken } }
  );
  return response.data.cart;
};

export const getWishList = async (encodedToken) => {
  const response = await axios.get("/api/user/wishlist", {
    headers: {
      authorization: encodedToken,
    },
  });
  return response.data.wishlist;
};

export const addToWishList = async (product, encodedToken) => {
  const response = await axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: encodedToken } }
  );
  return response.data.wishlist;
};

export const removeFromWishList = async (productID, encodedToken) => {
  const response = await axios.delete(`/api/user/wishlist/${productID}`, {
    headers: { authorization: encodedToken },
  });
  return response.data.wishlist;
};
