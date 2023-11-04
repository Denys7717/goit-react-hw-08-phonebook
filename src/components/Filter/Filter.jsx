import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { filterContact } from 'store/slice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const idFilter = nanoid();
  const dispatch = useDispatch();

  const findContact = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <div className={css.filterForm}>
      <label htmlFor={idFilter}>Find contacts by name</label>
      <input type="text" onChange={findContact} id={idFilter} />
    </div>
  );
};

export default Filter;
