import css from './ContactList.module.css';
import { selectorFilteredProducts } from 'store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getAllContacts } from 'store/thunks';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectorFilteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    !contacts && dispatch(getAllContacts());
  }, [dispatch, contacts]);

  return (
    <ul className={css.contactList}>
      {contacts &&
        contacts.map(({ id, name, phone }) => {
          return (
            <li key={id} className={css.contactItem}>
              {name}: {phone}
              <button
                type="button"
                className={css.btn}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
