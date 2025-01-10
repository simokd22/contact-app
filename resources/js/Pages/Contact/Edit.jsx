import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react"; // For setting page metadata
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"; // For authenticated layout
import ContactForm from "@/Components/ContactForm"; // Import the ContactForm component
import { Inertia } from "@inertiajs/inertia";

const EditContact = ({ contact }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        category: "",
    });

    const [errors, setErrors] = useState({});

    // Populate the form with contact data when the component mounts or contact changes
    useEffect(() => {
        console.log("Contact prop:", contact); // Debugging
        if (contact) {
            setFormData({
                name: contact.name || "",
                email: contact.email || "",
                phone: contact.phone || "",
                category: contact.category || "",
            });
        }
    }, [contact]);

    const handleSubmit = (updatedData) => {
        Inertia.put(`/contact/${contact.id}`, updatedData, {
            onError: (errorBag) => {
                setErrors(errorBag); // Set validation errors returned by Laravel
            },
            onSuccess: () => {
                console.log("Contact updated successfully!");
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Contact
                </h2>
            }
        >
            <Head title="Edit Contact" />

            <div className="flex items-center justify-center py-12">
                <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-md shadow-md">
                    <h3 className="mb-6 text-lg font-semibold text-center text-gray-700">
                        Update Contact Information
                    </h3>
                    <ContactForm
                        onSubmit={handleSubmit}
                        initialData={formData} // Pass initial data to the form
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditContact;
