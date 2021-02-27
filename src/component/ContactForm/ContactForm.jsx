const ContactForm = ({ onAddContact }) => {
  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.name.value === '') return;
    onAddContact({
      name: event.target.name.value,
      number: event.target.number.value,
    });
    event.target.name.value = '';
    event.target.number.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>

      <label htmlFor="phone">
        Number
        <input type="text" id="phone" name="number" required />
      </label>

      <input type="submit" value="Add contact" />
    </form>
  );
};

export default ContactForm;
