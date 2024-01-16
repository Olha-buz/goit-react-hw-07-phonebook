import { configureStore } from '@reduxjs/toolkit';
import { contactReducers } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactReducers,
        filter: filterReducer,
    }
});

