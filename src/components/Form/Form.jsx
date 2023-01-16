import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import {
  NewContactForm,
  NameInput,
  NumberInput,
  AddBtn,
  Error,
} from './Form.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    phone: '',
    id: '',
  };

  const handleSubmit = (item, { resetForm }) => {
    const normalizedName = item.name.toLowerCase();
    const repeatedNameList = contacts.items.filter(
      item => item.name.toLowerCase() === normalizedName
    );

    if (repeatedNameList.length === 0) {
      dispatch(addContact(item));
      resetForm();
      return;
    }
    alert(`${item.name} is already in contacts`);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <NewContactForm autoComplete="off">
        <label>
          {' '}
          Name{' '}
          <NameInput
            type="text"
            placeholder="Mia Fiona"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error>
            <ErrorMessage name="name" />
          </Error>
        </label>
        <br />
        <label>
          {' '}
          Number{' '}
          <NumberInput
            type="tel"
            placeholder="+38011 111 11 11"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Error>
            <ErrorMessage name="number" />
          </Error>
        </label>
        <br />
        <AddBtn type="submit">Add</AddBtn>
      </NewContactForm>
    </Formik>
  );
}
