import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';


const ContactList = () => {
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filter.name);

  const visibleContacts = contactsState.filter(contact => contact.name.toLowerCase().includes(filterState.toLowerCase));
  
  
  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ul>
  );
};

export default ContactList;
