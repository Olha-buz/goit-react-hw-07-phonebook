

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// export const selectVisibleContacts = createSelector(
//     [selectContacts, selectFilter], (contacts, filter) => {
//         const visibleContacts = contacts.filter(contact => contact.nametoLowerCase().includes(filter.toLowerCase()));
//         return visibleContacts;
//     }
// );
