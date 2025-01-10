import React, { useState, useEffect } from "react";

const ContactForm = ({ initialData, onSubmit }) => {
    const [formData, setFormData] = useState(initialData || {});

    useEffect(() => {
        setFormData(initialData || {}); // Update formData whenever initialData changes
    }, [initialData]);

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData, setErrors); // Pass data back to parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Phone Field */}
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone:
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            {/* Category Field */}
            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category:
                </label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category || ""}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Save Contact
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
