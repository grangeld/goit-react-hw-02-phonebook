import PropTypes from 'prop-types';

const ContactList = ({ phoneList, onDelete }) => {
  return (
    <ul>
      {phoneList.map(data => (
        <li key={data.id}>
          {data.name}: {data.number}
          <button onClick={() => onDelete(data.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  phoneList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
