import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./operations";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(addContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(addContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload)
                state.items = state.items.filter(contact => contact.id !== action.payload.id);
                state.error = null;
                // const index = state.items.findIndex(item => item.id === payload);
                // state.items.splice(index, 1);
            })
            .addCase(deleteContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const contactReducers = contactsSlice.reducer;