import React from 'react';

const Scroll = (props) => {
    return (
        <div className='shadow-2 mt4' style={{overflowY: 'scroll', height: '90vh'}}>
            {props.children}
        </div>
    );
};

// because <Scroll> contains <CardLIst /> in App.js, they render as its children

export default Scroll;