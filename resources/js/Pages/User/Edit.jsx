import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

const Edit = ({ user }) => {
    const { data, setData, put, errors } = useForm({
        name: user.name || '',
        email: user.email || '',
        role: user.role || 'user',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    <label>Role</label>
                    <select
                        value={data.role}
                        onChange={(e) => setData('role', e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    {errors.role && <div>{errors.role}</div>}
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;
