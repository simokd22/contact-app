import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const { id } = useParams(); // Get the contact ID from the route parameter
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: '',
    });

    const [loading, setLoading] = useState(false); // Optional: Loading state

    // Fetch the contact data when editing
    useEffect(() => {
        if (id) {
            setLoading(true);
            axios
                .get(`/contacts/${id}`)
                .then((response) => {
                    setFormData(response.data); // Populate the form with the existing data
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching contact:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiCall = id
            ? axios.put(`/contacts/${id}`, formData) // Update existing contact
            : axios.post('/contacts', formData); // Create new contact

        apiCall
            .then(() => navigate('/')) // Redirect to contact list on success
            .catch((error) => console.error('Error saving contact:', error));
    };

    if (loading) return <p>Loading contact data...</p>; // Optional: Display a loading state

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-2xl font-bold">
                {id ? 'Edit Contact' : 'Add Contact'}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                >
                    {id ? 'Update Contact' : 'Add Contact'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
