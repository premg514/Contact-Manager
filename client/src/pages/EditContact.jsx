import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';
import ContactForm from '../components/ContactForm';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const { data } = await API.get(`/${id}`);
      setContact(data);
    };
    fetchContact();
  }, [id]);

  const updateContact = async (updated) => {
    await API.put(`/${id}`, updated);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Edit Contact</h2>
      {contact && <ContactForm initialData={contact} onSubmit={updateContact} />}
    </div>
  );
};

export default EditContact;
