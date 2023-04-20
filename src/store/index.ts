import {configureStore} from "@reduxjs/toolkit";
import cityesReducer from './cityesSlice';

const store = configureStore({
    reducer: {
      cityes: cityesReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;