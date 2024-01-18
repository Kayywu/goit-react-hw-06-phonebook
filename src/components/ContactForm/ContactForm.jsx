import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../Redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    dispatch(addContact({ id: nanoid(), name, number }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label>
        Name:
        <input type="text" name="name" className={styles.inputField} required />
      </label>
      <label>
        Number:
        <input type="tel" name="number" className={styles.inputField} required />
      </label>
      <button type="submit" className={styles.submitButton}>Add contact</button>
    </form>
  );
};

export default ContactForm;
