import { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import s from './app.module.css';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const onAddContact = contact => {
    //Провекра, есть ли такие же имена
    if (!contacts.filter(e => e.name === contact.name).length > 0) {
      setContacts([...contacts, contact]);
      return true;
    }
    alert(`${contact.name} is already in contacts`);
    return false;
  };

  const normalizedFilter = filter.toLowerCase();
  const filterList = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  const onSetFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const onDelete = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div>
      <h1 className={s.heading}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>
      <Filter onFilter={onSetFilter} />
      <ContactList phoneList={filterList} onDelete={onDelete} />
    </div>
  );
}

export default App;
