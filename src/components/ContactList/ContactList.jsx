import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/contactsSlice';
import styles from './ContactList.module.css';


const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
          {contact.name}: {contact.number}{' '}
          <button  className={styles.deleteButton} onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
