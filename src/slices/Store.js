import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Index";

const store = configureStore({ reducer: rootReducer })

export default store