import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', height: '500px'  }}> {/*JS expression with a JS object inside, which can have CSS styles*/}
		{props.children}
		</div>
	)
}

export default Scroll;