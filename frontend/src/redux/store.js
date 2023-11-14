import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/user";
import { sellerReducer } from "./reducer/seller";
import { productReducer } from "./reducer/product";
import { eventReducer } from "./reducer/event";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    event: eventReducer,
  },
});

export default Store;
