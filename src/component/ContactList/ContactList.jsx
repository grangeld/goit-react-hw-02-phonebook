const ContactList = ({ phoneList, lol }) => {
  return (
    <ul>
      {phoneList.map(data => (
        <li key={data.id}>
          {data.name}: {data.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
