const ContactForm = () => {
  return (
    <form>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Add contact" />
    </form>
  );
};

export default ContactForm;
