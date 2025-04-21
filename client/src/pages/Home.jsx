import React, { useEffect, useState } from 'react';
import API from '../api';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';


const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false); // <-- control form visibility

  const fetchContacts = async () => {
    const { data } = await API.get('/');
    console.log(data)
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (newContact) => {
    await API.post('/', newContact);
    fetchContacts();
    setShowForm(false); // hide form after submit
  };

  const deleteContact = async (id) => {
    await API.delete(`/${id}`);
    fetchContacts();
  };

  return (
    <div className="container">
      <h1>Contact Manager</h1>

      {!showForm ? (
        <button className="add-btn" onClick={() => setShowForm(true)}>
          + Add Contact
        </button>
      ) : (
        <ContactForm onSubmit={addContact} />
      )}

      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default Home;
