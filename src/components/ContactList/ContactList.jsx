import { selectorFilteredProducts } from 'store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from 'store/thunks';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(selectorFilteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    !contacts && dispatch(getAllContacts());
  }, [dispatch, contacts]);

  return (
    <div className="container">
      <Grid
        container
        spacing={{ xs: 3, md: 2 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        {contacts &&
          contacts.map(contact => (
            <Grid item xs={2} sm={4} md={4} key={contact.id} maxWidth={100}>
              <ContactListItem key={contact.id} contact={contact} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ContactList;
