import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({

  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ''
  },

  // reducers: {   
  //     addContact: {
  //     reducer(state, action) {
  //       state.contacts.push(action.payload);
  //     },
  //     prepare(contact) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name: contact.name,
  //           number: contact.number,
  //         },
  //       };
  //     },
  //   },

  //   deleteContact(state, action) {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //     },
    
  //   changeFilter(state, action) {
  //     state.filter = action.payload;
  //   },
  // },

  // reducers: {   

  //   fetchingInProgress(state) {
  //     state.contacts.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  // },
    extraReducers: {
      [fetchContacts.pending](state, action) {
          state.contacts.isLoading = true;
    },
      [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
      [fetchContacts.rejected](state, action) {
            state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

// export const { addContact, deleteContact, changeFilter } =
//   contactsSlice.actions;

  // export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  // contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
