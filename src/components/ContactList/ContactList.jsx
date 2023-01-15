import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter} from '../../redux/selectors';
import { List, Contact, DeleteBtn } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/operations'; 


export const ContactList = () => {
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const { items, isLoading, error } = contacts;

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
          <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
        </Contact>
      ))}
    </List>
  );
};

