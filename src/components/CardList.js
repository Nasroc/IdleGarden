import React from 'react';
import Card from './Card';

const CardList = ({ plants, clicked, values }) => {
    function getIncome (i) {
        let income = 0;
        if (values[i].id/10 <= 0.5) {
            income = values[i].value/10;
        }
        else {
            income = values[i].value/5;
        }
        return income;
    }
    return (
        <div>
            {plants.map((user, i) => (
                <Card 
                key={plants[i].id} 
                name={plants[i].name} 
                image={plants[i].image}
                sunlight={plants[i].sunlight}
                id={plants[i].id}
                income={getIncome(i)}
                value={values[i].value}
                clicked={clicked}
                money={values[i].value * 10}
                />
            ))}

        </div>
    );
}

export default CardList;
export const { totalIncome } = CardList;