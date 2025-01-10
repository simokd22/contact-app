const Sidebar = () => (
    <div className="w-64 h-screen p-4 text-white bg-gray-900">
      <h2 className="mb-6 text-2xl font-bold">Contact Manager</h2>
      <ul className="space-y-4">
        <li><a href="/" className="block px-4 py-2 rounded hover:bg-gray-700">Contacts</a></li>
        <li><a href="/" className="block px-4 py-2 rounded hover:bg-gray-700">Organizations</a></li>
        <li><a href="/" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a></li>
      </ul>
    </div>
  );

  export default Sidebar;
