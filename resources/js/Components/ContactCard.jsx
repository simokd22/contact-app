import { Link } from "@inertiajs/react";

const ContactCard = ({ contact, onDelete }) => {
    return (
        <div className="p-4 bg-white border rounded-lg shadow">
            <h3 className="text-lg font-semibold">{contact.name}</h3>
            <p className="text-sm text-gray-600">{contact.email}</p>
            <p className="text-sm text-gray-600">{contact.phone || "N/A"}</p>
            <div className="flex justify-end mt-4 space-x-2">
                <Link
                    href={`/contact/${contact.id}/edit`}
                    className="px-3 py-1 text-white bg-yellow-500 rounded"
                >
                    Edit
                </Link>
                <button
                    onClick={onDelete}
                    className="px-3 py-1 text-white bg-red-500 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
