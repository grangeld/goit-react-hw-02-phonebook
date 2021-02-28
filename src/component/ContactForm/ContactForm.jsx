import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = event => {
    event.preventDefault();
    //рандомный id
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz×ℂ℃℄℅℆ℇ℈℉ℊℋℌℍℎℏℐℑℒℓ℔ℕ№℗℘ℙℚℛℜℝ℞℟℠℡™℣ℤ℥Ω℧ℨ℩KÅℬℭ℮ℯ ℴ⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅟ℵℶ℻ℽℾℿ⅀⅁⅂⅃⅄ⅅⅆⅇⅈⅉ⅊⅋⅍ⅎⅭⅮⅯ∀∁∂∃∄∅∆∇';
    const id =
      +new Date() +
      possible.charAt(Math.floor(Math.random() * possible.length));
    if (event.target.name.value === '') return;
    if (
      onAddContact({
        id,
        name: event.target.name.value,
        number: event.target.number.value,
      })
    ) {
      event.target.name.value = '';
      event.target.number.value = '';
    }
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

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
