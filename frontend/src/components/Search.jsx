import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const Search = ({ className, onSearchComplete }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Simulate a search function
        const items = [
            'Man',
            'Woman',
            'Accessories',
            'Bags&Travels',
            'Electronics'
        ];
        const filteredItems = items.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredItems);
        setQuery(''); // Clear the input field
        onSearchComplete(); // Notify the parent component to close the search field on small screens
    };

    return (
        <div className={`relative ${className}`}>
            <form onSubmit={handleSearch} className='flex'>
                <input
                    type="text"
                    placeholder="Search for items..."
                    className="w-full p-2 border border-gray-300 rounded-l"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="p-2 border border-gray-300 text-black text-2xl rounded-r bg-green-300">
                    <IoSearch />
                </button>
            </form>
            {results.length > 0 && (
                <div className='absolute top-12 left-0 w-full bg-white shadow-lg p-3 z-50'>
                    <ul>
                        {results.map((result, index) => (
                            <li key={index} className='p-2 border-b'>
                                {result}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
