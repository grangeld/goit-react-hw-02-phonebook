import { useState } from 'react';
import ContactForm from './ContactForm';

function App() {
  const [phoneBook, setphoneBook] = useState({
    contacts: [],
    filter: '',
  });
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter /> */}
      {/* <ContactList /> */}
    </div>
  );
}

export default App;
