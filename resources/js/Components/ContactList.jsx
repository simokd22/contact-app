import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactList = ({ contacts, selectedContacts, onSelectAll, onSelectContact , setContacts, refreshContacts }) => {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
            console.log(`Envoi de la requête DELETE pour l'ID : ${id}`);
            axios
                .delete(`/contacts/${id}`)
                .then((response) => {
                    console.log('Réponse du serveur:', response.data);
                    setContacts((prevContacts) =>
                        prevContacts.filter((contact) => contact.id !== id)
                    );
                    refreshContacts();
                })
                .catch((error) => console.error('Erreur lors de la suppression:', error));
        }
    };

    const isAllSelected = selectedContacts.length === contacts.length && contacts.length > 0;

    return (
        <div>
            <div className="mb-3 d-flex align-items-center">
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={isAllSelected}
                    onChange={(e) => onSelectAll(e.target.checked)}
                />
                <span>Select All</span>
            </div>
            <div className="row">
                {contacts.map((contact) => (
                    <div key={contact.id} className="mb-3 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={selectedContacts.includes(contact.id)}
                                        onChange={() => onSelectContact(contact.id)}
                                    />
                                </div>
                                <p className="card-text">{contact.email}</p>
                                <p className="card-text">{contact.phone}</p>
                                <p className="card-text"><strong>Category:</strong> {contact.category}</p>
                                <button
                                    className="btn btn-primary btn-sm me-2"
                                    onClick={() => navigate(`/edit/${contact.id}`)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(contact.id)}
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;
