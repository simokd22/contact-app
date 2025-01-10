import React from "react";
import { Head } from "@inertiajs/react"; // For setting page metadata
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"; // For authenticated layout
import ContactForm from "@/Components/ContactForm"; // Import the ContactForm component
import { Inertia } from "@inertiajs/inertia";

const CreateContact = () => {
  const handleSubmit = (formData, setErrors) => {
    // Use Inertia to send a POST request
    Inertia.post("/contact", formData, {
      onError: (errorBag) => {
        setErrors(errorBag); // Set validation errors returned by Laravel
      },
    });
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Add New Contact
        </h2>
      }
    >
      <Head title="Add New Contact" />

      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-md shadow-md">
          <h3 className="mb-6 text-lg font-semibold text-center text-gray-700">
            Contact Information
          </h3>
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default CreateContact;
