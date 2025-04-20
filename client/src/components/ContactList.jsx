import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) {
    return (
      <div className="empty-contacts">
        <div className="empty-icon">📋</div>
        <h3>No contacts found</h3>
        <p>Add your first contact to get started</p>
      </div>
    );
  }

  return (
    <div className="contacts-container">
      {contacts.map((contact) => (
        <div className="contact-card" key={contact._id}>
          <div className="contact-avatar">
            {contact.name.charAt(0).toUpperCase()}
          </div>
          <div className="contact-info">
            <h3 className="contact-name">{contact.name}</h3>
            <div className="contact-details">
              {contact.email && (
                <div className="contact-detail">
                  <span className="detail-icon">✉️</span>
                  <span className="detail-text">{contact.email}</span>
                </div>
              )}
              {contact.phone && (
                <div className="contact-detail">
                  <span className="detail-icon">📱</span>
                  <span className="detail-text">{contact.phone}</span>
                </div>
              )}
            </div>
          </div>
          <div className="contact-actions">
            <Link to={`/edit/${contact._id}`} className="edit-button">
              Edit
            </Link>
            <button 
              className="delete-button"
              onClick={() => {
                if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
                  onDelete(contact._id);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;