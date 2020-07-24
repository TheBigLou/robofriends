import React from 'react';

const Card = ({name, email, id}) => { // these are destructured props, same as saying props here and then props.name below
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=250x250`} />
			<div>
				<h2 className="f4">{name}</h2> {/*these must be wrapped in curly brackets because it's JS inside JSX*/}
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;