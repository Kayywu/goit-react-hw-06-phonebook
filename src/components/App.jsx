import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  return (
    <Provider store={store}>
      <div className="appContainer">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;
