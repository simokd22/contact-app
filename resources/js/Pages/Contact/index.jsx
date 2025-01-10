import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import { Link } from '@inertiajs/react';


const ContactList = () => {
  return (
    <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Contact
                </h2>
            }
        >
            <Head title="Contact" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Link href="/contact">
                                <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                                    Manage contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}

export default ContactList
