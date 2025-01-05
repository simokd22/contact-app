import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function DashboardUser({ users }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    User Management
                </h2>
            }
        >
            <Head title="User Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium">User List</h3>
                                {/* <Link
                                    href={route('users.create')}
                                    className="px-4 py-2 text-white bg-blue-500 rounded"
                                >
                                    Add User
                                </Link> */}
                            </div>
                            <table className="w-full border border-collapse border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 border border-gray-300">Name</th>
                                        <th className="px-4 py-2 border border-gray-300">Email</th>
                                        <th className="px-4 py-2 border border-gray-300">Actions</th>
                                    </tr>
                                </thead>
                           <tbody>
                           <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <Link
                                        href={route('contact_user')}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Manage Users (Index)
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        href={route('users.create')}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Create a New User
                                    </Link>
                                </li> */}
                                <li>
                                    <Link
                                        href={route('contact_user')}
                                        className="text-blue-500 hover:underline"
                                    >
                                        User Dashboard
                                    </Link>
                                </li>
                            </ul>
                           </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
