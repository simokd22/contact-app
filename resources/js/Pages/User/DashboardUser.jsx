import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import React from 'react';

const DashboardUser = ({ users }) => {
    console.log(users);

    if (!users || users.length === 0) {
        return (
            <AuthenticatedLayout>
                <div className="p-6 text-center text-gray-600">No users available.</div>
            </AuthenticatedLayout>
        );
    }

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(`/users/${id}`, {
                onSuccess: () => {
                    console.log(`User with ID ${id} deleted successfully.`);
                },
                onError: (errorBag) => {
                    console.error('Error deleting user:', errorBag);
                },
            });
        }
    };

    const handleAddUser = () => {
        Inertia.get('/users/create');
    };

    return (
        <AuthenticatedLayout>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-700">User Information</h2>
                    <button
                        onClick={handleAddUser}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
                    >
                        Add User
                    </button>
                </div>
                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                    <table className="min-w-full border border-collapse border-gray-200 table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 border border-gray-300">#</th>
                                <th className="px-4 py-2 border border-gray-300">Name</th>
                                <th className="px-4 py-2 border border-gray-300">Email</th>
                                <th className="px-4 py-2 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 text-center border border-gray-300">{index + 1}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.email}</td>
                                    <td className="flex justify-center px-4 py-2 space-x-2 border border-gray-300">
                                        <InertiaLink
                                            href={`/users/${user.id}/edit`}
                                            className="px-2 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                                        >
                                            Edit
                                        </InertiaLink>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="px-2 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default DashboardUser;
