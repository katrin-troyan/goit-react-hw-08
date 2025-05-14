import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id} className={css.contactBox}>
      <div className={css.contactBoxIcon}>
        <p className={css.contactText}>{name}</p>
        <p className={css.contactText}>{number}</p>
      </div>
      <button
        className={css.contactBoxBtn}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}
