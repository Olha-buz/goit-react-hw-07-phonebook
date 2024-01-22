import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./operations";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(addContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(addContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items.push(payload);
            })
            .addCase(addContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(deleteContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = state.items.filter(contact => contact.id !== payload)
                // const index = state.items.findIndex(item => item.id === payload);
                // state.items.splice(index, 1);
            })
            .addCase(deleteContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
});

export const contactReducers = contactsSlice.reducer;