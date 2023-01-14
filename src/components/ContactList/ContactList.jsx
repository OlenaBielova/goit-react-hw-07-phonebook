import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Contact, DeleteBtn } from './ContactList.styled';
// import { deleteContact } from '../../redux/contactsSlice';
import { fetchContacts } from 'redux/operations'; 


export const ContactList = () => {
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
    const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const { items, isLoading, error } = contacts;
  console.log(contacts);
  console.log(items);

  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  
  return (
    <List>
      {isLoading && <p>Loading contacts...</p>}
          {error && <p>{error}</p>}
      {filteredContacts.map(({ name, phone, id }) => (
        <Contact key={id}>
          <p>
            {name} : {phone}
          </p>
          <DeleteBtn type="button" onClick={() => dispatch()}>
            {/* <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}></DeleteBtn> */}
            Delete
          </DeleteBtn>
        </Contact>
      ))}
    </List>
  );
};

