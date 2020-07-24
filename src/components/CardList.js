import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<Fragment>  {/*remember to import {Fragment} with React*/}
			{
				robots.map((user, index) => {
					return (
						<Card
						key={index}
						id={robots[index].id}
						name={robots[index].name}
						email={robots[index].email}
						/>
					);
				})
			}
		</Fragment>	
	);
}

export default CardList;