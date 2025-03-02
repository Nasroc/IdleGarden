import React from 'react';

const Card = ({name, image, sunlight, clicked, id, value, cost, income}) => {                       //creates the individual card frameworks
    return (
        <div className='dib'>
            <button
                key={id}
                type='submit'
                className='bg-light-green ma2 pa2 grow br3 bw0 shadow-3 plantCard'
                onClick={clicked}
                onSubmit={clicked}
                value={id}
                income={income}
            >
                <img src={image} alt='plant' width={100} height={100}/>
                <h2>{name}</h2>
                <p>{sunlight}</p>
                <p>Value: {value}</p>
                <p>Cost: {cost.toFixed(1)}</p>
                <p>Income: {income.toFixed(1)}</p>
            </button>
        </div>
    );
}

export default Card;