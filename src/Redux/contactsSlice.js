import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    filter: '',
  },
  reducers: {
    setContacts: (state, action) => {
      state.list = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { setContacts, setFilter, addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer; 
 