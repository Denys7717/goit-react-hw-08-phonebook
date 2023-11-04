import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectorAppState } from 'store/appState/selectors';

export const App = () => {
  const data = useSelector(selectorAppState);
  const loading = data.isLoading;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </>
  );
};
