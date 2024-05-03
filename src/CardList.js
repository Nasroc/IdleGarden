import React from 'react';
import Card from './Card';

const CardList = ({ plants, clicked }) => {
    return (
        <div>
            {plants.map((user, i) => (
                <Card key={plants.id} 
                name={plants[i].name} 
                image={plants[i].image}
                sunlight={plants[i].sunlight}
                id={plants[i].id}
                value={plants[i].value}
                clicked={clicked}
                />
            ))}
        </div>
    );
}

export default CardList;