import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filter && state.filter.name);

  const visibleContacts = contactsState.filter(contact =>
    contact.name.toLowerCase().includes(filterState.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={id => {
            dispatch(deleteContact(id));
          }}
        />
      ))}
    </ul>
  );
};

export default ContactList;
