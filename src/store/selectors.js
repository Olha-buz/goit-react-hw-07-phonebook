import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectLoading = state => state.isLoading;
export const selectError = state => state.error;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter], (contacts, filter) => {
        const visibleContacts = contacts.filter(contact => contact.nametoLowerCase().includes(filter.toLowerCase()));
        return visibleContacts;
    }
);
