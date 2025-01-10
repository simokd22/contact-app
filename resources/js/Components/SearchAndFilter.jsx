const SearchAndFilter = ({ onSearch, onFilter }) => (
    <div className="flex items-center justify-between mb-4">
      <input
        type="text"
        placeholder="Search for Contacts"
        className="w-1/3 p-2 border border-gray-300 rounded"
        onChange={(e) => onSearch(e.target.value)}
      />
    
    </div>
  );

  export default SearchAndFilter;
