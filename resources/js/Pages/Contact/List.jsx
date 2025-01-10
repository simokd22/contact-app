import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import ContactCard from "@/Components/ContactCard"; // Import the ContactCard component
import AlphabetBar from "@/Components/AlphabetBar"; // Import the AlphabetBar component
import { useState } from "react";

const ContactList = ({ contacts: initialContacts }) => {
    const [filteredContacts, setFilteredContacts] = useState(initialContacts);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this contact?")) {
            Inertia.delete(`/contact/${id}`, {
                onSuccess: () => {
                    // Optionally, you can show a success message or refresh the contacts
                    console.log("Contact deleted successfully");
                },
                onError: (error) => {
                    console.error("Failed to delete contact:", error);
                },
            });
        }
    };

    // Filter contacts by the first letter of the name
    const handleFilterByLetter = (letter) => {
        if (letter === '') {
            // Show all contacts if "All" is clicked
            setFilteredContacts(initialContacts);
        } else {
            // Filter contacts by the first letter of the name
            const filtered = initialContacts.filter(
                (contact) => contact.name[0].toUpperCase() === letter
            );
            setFilteredContacts(filtered);
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Contact List
                </h2>
            }
        >
            <Head title="Contact List" />
            <div className="container py-6 mx-auto">
                {/* Add New Contact Button */}
                <div className="flex justify-end mb-4">
                    <Link
                        href="/contact/create"
                        className="px-4 py-2 text-white bg-blue-500 rounded"
                    >
                        Add New Contact
                    </Link>
                </div>

                {/* Outer Background Card */}
                <div className="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
    {/* Alphabet Bar */}
    <div className="mb-6">
        <AlphabetBar onFilterByLetter={handleFilterByLetter} />
    </div>

    {/* Contact Cards Grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    onDelete={() => handleDelete(contact.id)}
                />
            ))
        ) : (
            <p className="text-center text-gray-500 col-span-full">
                No contacts found.
            </p>
        )}
    </div>
</div>

            </div>
        </AuthenticatedLayout>
    );
};

export default ContactList;
