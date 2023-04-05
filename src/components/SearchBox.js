import React from 'react';

const SearchBox = ({ searchChange, searchSubmit, resetSearch }) => {
    return (
        <div className="pa2">
            <form onSubmit={searchSubmit}>
            <input
                type='search'
                placeholder='Search robots'
                className='pa3 ba b--green bg-lightest-blue shadow-4'
                onChange={searchChange}
            />
            <br />
            <button type='button' className="mr2 mt3 link dim ph3 pv2 mb2 b--green bg-lightest-blue shadow-4" onClick={searchSubmit}>Search</button>
            <input type='reset' className="ml2 mt3 link dim ph3 pv2 mb2 b--green shadow-4" onClick={resetSearch} />
            </form>
        </div>
    );
}

export default SearchBox;