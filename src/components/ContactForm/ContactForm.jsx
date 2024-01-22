import Notiflix from 'notiflix';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'store/operations';
import { selectContacts } from 'store/selectors';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = evt => {
        evt.preventDefault();
        if (contacts.some(contact => contact.name === name)) {
            Notiflix.Notify.info(`${name} is already in contacts`);
            return;
        } else {
            dispatch(addContacts({name, phone}));
        }
        setName('');
        setPhone('');
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        if (name === 'name') {
            setName(value)
        } else if (name === 'phone') {
            setPhone(value)
        }
    };

    return (
        <form className={css.formcontact} onSubmit={handleSubmit} autoComplete='off'>
            <label >
                <div >
                    Name
                </div>
                <input
                    className={css.inputform}
                    type="text"
                    name="name"
                    value={name}
                    required
                    onChange={handleChange}
                />
            </label>
            <label >
                <div >
                    Number
                </div>
                <input
                    className={css.inputform}
                    type="tel"
                    name="phone"
                    value={phone}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    title="The phone number in the form 000-00-00."
                    required
                    onChange={handleChange}
                />
            </label>
            <button className={css.button} type='submit'>Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.object
};

