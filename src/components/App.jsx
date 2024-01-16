
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "store/selectors";
import { useEffect } from "react";
import { fetchContacts } from "store/operations";
import { Loader } from "./ContactForm/Loader/Loader";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);


  return (
    <div className={css.divApp}>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};
