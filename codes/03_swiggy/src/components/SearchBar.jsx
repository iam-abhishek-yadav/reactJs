import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
	return (
		<div className='search'>
			<input
				type='text'
				placeholder='Search...'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<button
				className='search-btn'
				onClick={onSearch}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
