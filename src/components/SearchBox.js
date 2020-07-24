import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input
			className='pa3 ba b--green bg-lightest-blue'
			type='search'
			placeholder='Search Robots'
			onChange={searchChange} // when onChange event is triggered (i.e. type into the box), call the searchChange function with the input. searchChange is a prop of function onSearchChange, defined in App.js
			/>
		</div>
		);
}

export default SearchBox;