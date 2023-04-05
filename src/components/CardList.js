import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // const cardComponent = robots.map((user, i) => {
    //     return (
    //         <Card
    //             id={robots[i].id}
    //             name={robots[i].name}
    //             email={robots[i].email}
    //             key={robots[i].id}
    //         />
    //         );
    // });
    
    // we can just put this entire function within the return statement below, where before we were returning {cardComponent}

    return (
        <div className="card-list">
        {
            robots.map((user, i) => {
            return (
                <Card
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email}
                    key={robots[i].id}
                />
                )
            })
        }
        </div>
    );
}

export default CardList;