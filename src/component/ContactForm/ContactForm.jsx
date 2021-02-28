const ContactForm = ({ onAddContact }) => {
  const handleSubmit = event => {
    event.preventDefault();
    //рандомный id
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (event.target.name.value === '') return;
    onAddContact({
      id:
        new Date() +
        possible.charAt(Math.floor(Math.random() * possible.length)),
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
