import React from 'react';
import Card from './Card';

const CardList = ({ plants, clicked, values }) => {                             //creates the list of all the cards
    function getIncome (i) {                            //sets income value on the cards
        let income = 0;
        if (values[i].id/10 <= 0.5) {
            income = values[i].value/10;
        }
        else {
            income = values[i].value/5;
        }
        return income;
    }
    function getCost (i) {                          //sets the cost value on the cards
        let cost = 0;
        if(values[i].value === 0){
            cost = 1;
        }else if(values[i].id/10 <= 0.5){
            cost = values[i].value * 0.8;
        }else{
            cost = values[i].value * 2;
        }
        return cost;
    }
    return (                                    //returns updated values
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
                cost={getCost(i)}
                />
            ))}

        </div>
    );
}

export default CardList;
export const { totalIncome } = CardList;