import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/thunks';
import { selectorFilteredProducts } from 'store/selectors';
import { Alert } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorFilteredProducts);

  const idName = nanoid();
  const idNumber = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    if (
      contacts.find(
        ({ name: nameCont }) => nameCont.toLowerCase() === name.toLowerCase()
      )
    ) {
      <Alert severity="error">`${name} is already in contacts.`</Alert>;
      return;
    }
    dispatch(addContact({ name, number }));
  };

  return (
    <>
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label htmlFor={idName}>Name</label>
        <input
          type="text"
          id={idName}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={idNumber}>Number</label>
        <input
          id={idNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
