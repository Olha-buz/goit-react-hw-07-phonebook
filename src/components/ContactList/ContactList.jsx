
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selectors';
import PropTypes from 'prop-types';
import { deleteContacts } from 'store/operations';

const getVisibleContacts = (contacts, filter) => {
    if (!filter) {
        return contacts
    } else {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
    
    
};



export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    
    // const visibleContacts = selectVisibleContacts(contacts, filter);
    
    const visibleContacts = getVisibleContacts(contacts, filter);
 
    // console.log(filteredContacts);
    // console.log(filter);

    const handleDelete = (contact) => {
        dispatch(deleteContacts(contact.id));
    }
    return (
        <ul className={css.contacts}>
            {visibleContacts.map(contact => {
                return (
                    <li className={css.itemcontact} key={contact.id} >
                        <p className={css.pItem}>{contact.name}: {contact.phone}</p>
                        <button
                            className={css.buttonremove}
                            type="button"
                            id={contact.name}
                            onClick={() => handleDelete(contact)}>
                            Delete
                        </button>
                    </li>
                )
            })}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.object,
    filter: PropTypes.string,
};
