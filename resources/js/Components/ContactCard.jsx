const ContactCard = ({ name, email, phone, category, initials }) => (
    <div className="flex items-center p-4 space-x-4 bg-white rounded shadow-md">
      <div className="flex items-center justify-center w-12 h-12 font-bold text-white bg-blue-500 rounded-full">
        {initials}
      </div>
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm text-gray-500">{phone}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );

  export default ContactCard;
