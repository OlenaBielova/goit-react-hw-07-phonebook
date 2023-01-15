import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <h3>Phonebook</h3>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      <ContactList />
    </Container>
  );
}
